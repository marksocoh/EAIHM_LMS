# Generated by Django 3.2.6 on 2022-09-22 20:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20220917_1536'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='outcomes',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='requirements',
            field=models.TextField(null=True),
        ),
    ]