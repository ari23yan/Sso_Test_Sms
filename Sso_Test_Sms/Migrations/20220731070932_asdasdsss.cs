using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sso_Test_Sms.Migrations
{
    public partial class asdasdsss : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmailActiveCode",
                table: "users");

            migrationBuilder.DropColumn(
                name: "IsEmailActive",
                table: "users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EmailActiveCode",
                table: "users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsEmailActive",
                table: "users",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
