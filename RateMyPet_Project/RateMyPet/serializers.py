from rest_framework import serializers
from .models import User, Pet, UserRating

class UserSerializer(serializers.HyperlinkedModelSerializer):
    pets = serializers.HyperlinkedRelatedField(
        view_name='pet_detail',
        many=True,
        read_only=True
    )
    userratings = serializers.HyperlinkedRelatedField(
        view_name='userrating_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'pets', 'userratings')

class PetSerializer(serializers.HyperlinkedModelSerializer):
    users = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    userratings = serializers.HyperlinkedRelatedField(
        view_name='userrating_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Pet
        fields = ('id', 'rating', 'image_url', 'users', 'userratings')

class UserRatingSerializer(serializers.HyperlinkedModelSerializer):
    pets = serializers.HyperlinkedRelatedField(
        view_name='pet_detail',
        read_only=True
    )
    users = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        read_only = True
    )
    class Meta:
        model = UserRating
        fields = ('id', 'userrating', 'pets', 'users')
