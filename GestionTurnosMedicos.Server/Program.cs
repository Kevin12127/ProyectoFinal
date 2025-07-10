using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// 🔗 Conexión a SQL Server
builder.Services.AddDbContext<TurnosContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 🔐 CORS para la app de React en localhost:5173
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials());
});

// 📦 Controladores y documentación Swagger
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

// 🔐 HTTPS redirection
app.UseHttpsRedirection();

// 🌐 Habilita CORS antes de controladores
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
