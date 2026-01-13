from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from restaurant.models import Table
from restaurant.permissions import IsAdminOrStatusUpdater
from restaurant.serializers import TableSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class TableListCreateView(generics.ListCreateAPIView):
    queryset = Table.objects.all()
    serializer_class = TableSerializer
    permission_classes = [IsAdminOrStatusUpdater]

class TableDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Table.objects.all()
    serializer_class = TableSerializer
    permission_classes = [IsAdminOrStatusUpdater]

class TableStatsView(APIView):
    def get(self, request):
        qs = Table.objects.filter(is_active=True)
        total = qs.count()
        ocuppied = qs.filter(status='BUSY').count()
        available = qs.filter(status='FREE').count()
        ocuppied_percent = round((ocuppied / total) * 100, 2) if total else 0.0
        return Response({
            "total": total,
            "occupied": ocuppied,
            "available": available,
            "occupied_percent": ocuppied_percent
        })