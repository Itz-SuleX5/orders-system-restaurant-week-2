from django.urls import path
from .views import TableListCreateView, TableDetailView, TableStatsView

urlpatterns = [
     path('tables/', TableListCreateView.as_view(), name='table-list'),
     path('tables/<int:pk>/', TableDetailView.as_view(), name='table-detail'),
     path('tables/stats/', TableStatsView.as_view(), name='table-stats'),
]
