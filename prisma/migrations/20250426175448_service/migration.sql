-- CreateEnum
CREATE TYPE "serviceStatus" AS ENUM ('PENDING', 'INPROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bikes" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "bikes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "status" "serviceStatus" NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "bikes_customerId_key" ON "bikes"("customerId");

-- CreateIndex
CREATE UNIQUE INDEX "service_bikeId_key" ON "service"("bikeId");

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
