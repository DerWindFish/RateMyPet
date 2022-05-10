from django.contrib import admin
from .models import User, Pet, UserRating

# Register your models here.
admin.site.register(User)
admin.site.register(Pet)
admin.site.register(UserRating)