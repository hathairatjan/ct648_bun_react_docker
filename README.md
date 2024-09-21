React + TypeScript + Vite
สร้าง web app ด้วย Docker แล้ว deploy ขึ้น AWS
IP เครื่อง 
ขั้นตอนการดำเนินการ
1. สร้าง Dockerfile ไว้ในโปรเจกต์ เพื่อตั้งค่าโปรเจกต์ Bun ที่ทำงานร่วมกับ Nginx โดยมีการทำงานแบบสองขั้นตอน (multi-stage build) ซึ่งช่วยให้ขนาดของ image ที่ได้มีขนาดเล็กลง และทำงานได้อย่างมีประสิทธิภาพมากขึ้น
การสร้างแอปด้วย Bun เป็นการเตรียมและสร้างแอปพลิเคชัน Bun ก่อนนำไปใช้งานกับ Nginx ในขั้นต่อไป
 FROM oven/bun:latest AS bun-builder
 WORKDIR /app
 COPY . .
 RUN bun install
 RUN bun run build
