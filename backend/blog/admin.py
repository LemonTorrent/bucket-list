from django.contrib import admin

# Register your models here.
from .models import Blog

class BlogAdmin(admin.ModelAdmin):
    blog_display = ('title', 'date', 'description')

# Register your models here.

admin.site.register(Blog, BlogAdmin)