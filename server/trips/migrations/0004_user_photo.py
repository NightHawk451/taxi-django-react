# Generated by Django 3.1 on 2020-08-30 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trips', '0003_trip_driver_rider'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='photos'),
        ),
    ]
