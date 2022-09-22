from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from .serializers import TeacherSerializers,CourseCategorySerializers, CourseSerializers

from . import models

class TeacherList(generics.ListCreateAPIView):
        queryset = models.Teacher.objects.all()
        serializer_class = TeacherSerializers
        # permission_classes = [permissions.IsAuthenticated]

class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
        queryset = models.Teacher.objects.all()
        serializer_class = TeacherSerializers
        # permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def teacher_login(request):
        email = request.POST['email']
        password = request.POST['password']
        teacherData = models.Teacher.objects.get(email=email,password=password)

        if teacherData:
                return JsonResponse({'bool':True})
        else:
                return JsonResponse({'bool':False})



class CategoryList(generics.ListCreateAPIView):
        queryset = models.CourseCategory.objects.all()
        serializer_class = CourseCategorySerializers
        # permission_classes = [permissions.IsAuthenticated]

class CourseList(generics.ListCreateAPIView):
        queryset = models.Course.objects.all()
        serializer_class = CourseSerializers


class TeacherCourseList(generics.ListAPIView):
        serializer_class = CourseSerializers

        def get_queryset(self):
                teacher_id = self.kwargs['teacher_id']
                teacher = models.Teacher.objects.get(pk=teacher_id)
                return models.Course.objects.filter(teacher=teacher)
