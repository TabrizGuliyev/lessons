import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class FormDataDatabase extends AbstractDatabase<FormData> implements FormDataDatabaseInter{

    @Override
    public  List<FormData> getAll() throws Exception{
            List<FormData> result = new ArrayList<>();
            try(Connection conn = connect()) {
                //chay
                Statement stmt = conn.createStatement();//lotka
                stmt.execute("select * from form_data");//lotkaya doldurmaq ve gondermek

                ResultSet rs = stmt.getResultSet();

                while (rs.next()) {
                    int id = rs.getInt("id");
                    String value = rs.getString("value");
                    result.add(new FormData(id, value));
                }
            }

            return result;
        }

    @Override
    public  List<FormData> getAllByPS() throws Exception{
        List<FormData> result = new ArrayList<>();
        try(Connection conn = connect()) {
            //chay
            PreparedStatement stmt = conn.prepareStatement("select * from form_data");//lotka
            ResultSet rs=stmt.executeQuery();//lotkaya doldurmaq ve gondermek

            while (rs.next()) {
                int id = rs.getInt("id");
                String value = rs.getString("value");
                result.add(new FormData(id, value));
            }
        }

        return result;
    }

    @Override
    public  boolean update(FormData formData) throws Exception{
        try(Connection conn = connect()) {
            //chay
            PreparedStatement stmt = conn.prepareStatement("update form_data set value=? where id=?");//lotka
            stmt.setInt(1,formData.getId());
            stmt.setString(2,formData.getValue());
            stmt.executeUpdate();
        }
        return true;
    }

    @Override
    public  int insert(FormData formData) throws Exception{
        try(Connection conn = connect()) {
            //chay
            PreparedStatement stmt = conn.prepareStatement("insert form(name,website) values(?,?)");//lotka
            stmt.setString(1,formData.getValue());
            stmt.setString(2,formData.getValue());
            return stmt.executeUpdate();
        }
    }

    @Override
    public  int delete(int id) throws Exception{
        try(Connection conn = connect()) {
            //chay
            PreparedStatement stmt = conn.prepareStatement("delete from form where id=?");//lotka
            stmt.setInt(1,id);
            return stmt.executeUpdate();
        }
    }


    @Override
    public  List<FormData> myAwesomeCustomMethod() throws Exception{
        //bazadan select edir
        return null;
    }
}
