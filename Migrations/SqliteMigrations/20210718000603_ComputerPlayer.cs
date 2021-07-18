using Microsoft.EntityFrameworkCore.Migrations;

namespace scrabble.Migrations.SqliteMigrations
{
    public partial class ComputerPlayer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ComputerDifficulty",
                table: "Players",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsComputer",
                table: "Players",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ComputerDifficulty",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "IsComputer",
                table: "Players");
        }
    }
}
