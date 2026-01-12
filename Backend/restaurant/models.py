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
    capacity = models.PositiveIntegerField(max_length=3, default=4)
    status = models.CharField(max_length=4, choices=STATUS_CHOICES, default='FREE')
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Mesa {self.number} ({self.get_status_display()})"
    
    class Meta:
        verbose_name = "Mesa"
        verbose_name_plural = "Mesas"
        ordering = ['number']