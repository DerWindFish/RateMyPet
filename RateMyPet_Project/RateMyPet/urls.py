from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path('api/users/', views.UserList.as_view(), name='user_list'),
    path('api/users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('api/pets/', views.PetList.as_view(), name='pet_list'),
    path('api/pets/<int:pk>', views.PetDetail.as_view(), name='pet_detail'),
    path('api/userratings/', views.UserRatingList.as_view(), name='userrating_list'),
    path('api/userratings/<int:pk>', views.UserRatingDetail.as_view(), name='userrating_detail'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]