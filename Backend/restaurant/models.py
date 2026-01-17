from django.db import models

# Create your models here.

class Table(models.Model):
    STATUS_CHOICES = (
        ('FREE', 'Libre'),
        ('BUSY', 'Ocupada'),
        ('RSVD', 'Reservada'),
        ('CLN', 'Limpieza'),
    )
    number = models.CharField(max_length=4, unique=True)
    capacity = models.PositiveIntegerField(default=4)
    status = models.CharField(max_length=4, choices=STATUS_CHOICES, default='FREE')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mesa {self.number} ({self.get_status_display()})"
    
    class Meta:
        verbose_name = "Mesa"
        verbose_name_plural = "Mesas"
        ordering = ['number']

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"Category {self.name}"
    
    class Meta:
        verbose_name = "Categoría"
        verbose_name_plural = "Categorías"

class Dish(models.Model):
    name = models.CharField(max_length=50, unique=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='dishes')
    price = models.DecimalField(max_digits=8, decimal_places=2)
    description = models.TextField(blank=True)
    is_available = models.BooleanField(default=True)
    image = models.ImageField(upload_to='dishes/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.category.name})"