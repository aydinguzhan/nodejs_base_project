export const corsConfig = {
    origin: 'http://localhost', // Belirli bir kaynaktan gelen isteklere izin ver
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // İzin verilen HTTP metodları
    allowedHeaders: ['Content-Type', 'Authorization'] // İzin verilen başlıklar
}


