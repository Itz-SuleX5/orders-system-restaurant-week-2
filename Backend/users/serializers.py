from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User
import uuid

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'password', 'role')
        extra_kwargs = {'username': {'read_only' : True}}

    def create(self, validated_data):
        username = validated_data.get('username') or uuid.uuid4().hex[:12]
        user = User.objects.create_user(
            username=username,
            first_name=validated_data.get('first_name', ''),  
            last_name=validated_data.get('last_name', ''),    
            email=validated_data.get('email', ''),            
            password=validated_data['password'],
            role=validated_data.get('role', 'client')
        )
        return user

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        return token
    
    def validate(self, attrs):
        data = super().validate(attrs)
        data.update({
            "id": self.user.id,
            "email": getattr(self.user, "email", None),       
            "first_name": getattr(self.user, "first_name", None),  
            "last_name": getattr(self.user, "last_name", None),    
            "role": getattr(self.user, "role", None),  
        })

        return data