from django.urls import path
from .views import CategoryDetailView, CategoryListCreateView, DishDetailView, DishListCrateView, TableListCreateView, TableDetailView, TableStatsView

urlpatterns = [
     path('tables/', TableListCreateView.as_view(), name='table-list'),
     path('tables/<int:pk>/', TableDetailView.as_view(), name='table-detail'),
     path('tables/stats/', TableStatsView.as_view(), name='table-stats'),
     path('categories/', CategoryListCreateView.as_view(), name='categories-list'),
     path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
     path('dishes/', DishListCrateView.as_view(), name='dishes-list'),
     path('dish/<int:pk>/', DishDetailView.as_view(), name='dish-detail')
]
