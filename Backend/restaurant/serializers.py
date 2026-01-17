from rest_framework import serializers
from .models import Table, Category, Dish

class TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Table
        fields = ('id', 'number', 'capacity', 'status', 'is_active', 'created_at')
        read_only_fields = ('id', 'created_at')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')
        read_only_fields = ('id',)

class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('id', 'name', 'category', 'price', 'description' , 'is_available', 'image', 'created_at')
        read_only_fields = ('id', 'created_at')