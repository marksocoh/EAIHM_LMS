# Generated by Django 3.2.6 on 2022-09-17 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_course_technologies_course_thumbnail'),
    ]

    operations = [
        migrations.RenameField(
            model_name='teacher',
            old_name='mobileno',
            new_name='mobile',
        ),
        migrations.AlterField(
            model_name='course',
            name='thumbnail',
            field=models.ImageField(null=True, upload_to='media/'),
        ),
    ]
