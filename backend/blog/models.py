from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=120)
    # date = models.DateField(auto_now_add=True)
    date = models.CharField(max_length=120)
    description = models.TextField()


    def _str_(self):
        return self.title