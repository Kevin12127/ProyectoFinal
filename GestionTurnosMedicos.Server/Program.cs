using Microsoft.EntityFrameworkCore; // Asegúrate de que esta directiva using esté presente  
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// 🔗 Conexión a SQL Server  
builder.Services.AddDbContext<TurnosContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 🔐 Habilitar CORS para comunicación con React  
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Turnos Médicos API", Version = "v1" });
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// 🧪 Swagger solo en desarrollo  
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// 🔒 Redirección HTTPS  
app.UseHttpsRedirection();

// 🎯 Habilitar CORS  
app.UseCors("AllowReactApp");

// 🧭 Usar controladores  
app.MapControllers();

// 🌐 React fallback  
app.MapFallbackToFile("/index.html");

app.Run();
