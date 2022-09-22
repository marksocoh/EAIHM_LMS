from rest_framework import serializers
from . import models

class TeacherSerializers(serializers.ModelSerializer):
    class Meta:
        model =models.Teacher
        fields = ['id','fullname','email','password','qualification','mobile','skills']


class CourseCategorySerializers(serializers.ModelSerializer):
    class Meta:
        model =models.CourseCategory
        fields = ['id','title','description']


class CourseSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['category','teacher','title' ,'description' ,'thumbnail' ,'tags','outcomes','requirements']