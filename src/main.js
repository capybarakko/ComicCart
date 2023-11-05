function main(){
    console.log("test");

    var loginData = {
        'email':"KengoKashihara1998@gmail.com",
        'password':"Rakko3150K61"
    };

    var loginResponse = UrlFetchApp.fetch("https://alert.shop-bell.com/users/login/",loginData);
    var calenderResponse = UrlFetchApp.fetch("https://alert.shop-bell.com/calendar/288953/202311/");
    var content = calenderResponse.getContentText();
    var table = Parser.data(content).from('<table id="reflow" class="table">').to('</table>').iterate();

    console.log(table);
}