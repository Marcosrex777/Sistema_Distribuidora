from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
    error = False  # Variable para manejar errores

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect("home")  # Redirige a una página de inicio
        else:
            error = "Usuario o contraseña incorrectos"

    return render(request, "login.html", {"error": error})


from django.urls import path
from .views import home_view, login_view

urlpatterns = [
    path("", login_view, name="Sistema.html"),  # Página de login
    path("ModuloPrincipal.html/", home_view, name="ModuloPrincipal.html"),  # Página de inicio después del login
]
