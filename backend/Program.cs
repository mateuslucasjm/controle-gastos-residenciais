using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    if (
        connectionString != null
        && connectionString.Contains("Data Source=")
        && !connectionString.Contains("/")
        && !connectionString.Contains("\\")
    )
    {
        var fileName = connectionString.Replace("Data Source=", "");
        var absolutePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, fileName);
        options.UseSqlite($"Data Source={absolutePath}");
    }
    else
    {
        options.UseSqlite(connectionString);
    }
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var allowedOrigins = builder.Configuration["AllowedOrigins"];

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowFrontend",
        policy =>
        {
            if (!string.IsNullOrEmpty(allowedOrigins))
            {
                policy.WithOrigins(allowedOrigins.Split(",")).AllowAnyHeader().AllowAnyMethod();
            }
        }
    );
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1");
    c.RoutePrefix = string.Empty;
});

app.UseHttpsRedirection();

app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();
