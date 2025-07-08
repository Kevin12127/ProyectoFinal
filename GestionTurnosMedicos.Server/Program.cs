using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// 🔗 Conexión a SQL Server
builder.Services.AddDbContext<TurnosContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 🔐 CORS para permitir comunicación con React (localhost:5173)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("https://localhost:52043", "http://localhost:5173")

                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Turnos Médicos API",
        Version = "v1"
    });
});

var app = builder.Build();

// 🧪 Swagger solo en desarrollo
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 🔒 Redirección HTTPS
app.UseHttpsRedirection();

// 🎯 Habilita CORS para React
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();

