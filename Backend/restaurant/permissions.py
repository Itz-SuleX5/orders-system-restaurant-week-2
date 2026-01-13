from rest_framework import permissions

class IsAdminOrStatusUpdater(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        user = getattr(request, "user", None)
        if not user or not user.is_authenticated:
            return False
        if user.role == "admin":
            return True
        if request.method == "PATCH" and user.role == "waiter":
            keys = set(request.data.keys()) if isinstance(request.data, dict) else set()
            return keys <= {'status'}
        return False
    
    def has_object_permission(self, request, view, obj):
        return super().has_permission(request, view)