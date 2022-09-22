from distutils.command.upload import upload
from tabnanny import verbose
from unicodedata import category
from django.db import models

class Teacher(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobile = models.CharField(max_length=20)
    skills = models.TextField()

    def __str__(self):
        return self.fullname

class CourseCategory(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    
    class Meta:
        verbose_name_plural  ="Course Categories"
    def __str__(self):
        return self.title

class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete= models.CASCADE)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    thumbnail = models.ImageField(upload_to="media/", null=True)
    tags = models.TextField(null=True)
    outcomes = models.TextField(null=True)
    requirements = models.TextField(null=True)

    def __str__(self): 
        return self.title

class Student(models.Model):
    fullname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    mobileno = models.CharField(max_length=20)
    address = models.TextField()  
    interested_category = models.TextField() 

    def __str__(self):
        return self.fullname


