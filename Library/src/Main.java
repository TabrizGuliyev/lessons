import java.util.List;

public class Main {

    public static void main(String[] args) throws Exception{

//        List<FormData> list = Database.getAllFormData();
//        System.out.println(list);
      FormDataDatabaseInter fdd = DI.instance();
      fdd.myAwesomeCustomMethod();
//
//        list = Database.getAllFormData();
//        System.out.println(list);
    }
}
