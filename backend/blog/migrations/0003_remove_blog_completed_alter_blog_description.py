# Generated by Django 4.2.14 on 2024-07-17 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_blog_completed_blog_description_alter_blog_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='completed',
        ),
        migrations.AlterField(
            model_name='blog',
            name='description',
            field=models.TextField(),
        ),
    ]