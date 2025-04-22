import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;




public class User {
    private String username;
    private String password;

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}



public class Main {
    private static ArrayList<User> users = new ArrayList<>();

    public static void main(String[] args) {
        // Agregar usuarios de ejemplo
        users.add(new User("usuario1", "contraseña1"));
        users.add(new User("usuario2", "contraseña2"));
        
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese su usuario: ");
        String username = scanner.nextLine();

        System.out.print("Ingrese su contraseña: ");
        String password = scanner.nextLine();

        if (authenticateUser(username, password)) {
            System.out.println("¡Acceso concedido!");
        } else {
            System.out.println("Usuario o contraseña incorrectos.");
        }

        scanner.close();
    }

    // Método para autenticar al usuario
    private static boolean authenticateUser(String username, String password) {
        for (User user : users) {
            if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
                return true;
            }
        }
        return false;
    }
}
