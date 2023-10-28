-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "PackOrUnit" AS ENUM ('PACK', 'UNIT');

-- CreateTable
CREATE TABLE "UserTeste" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_Hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserTeste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companyInfo" (
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressLocalCode" TEXT NOT NULL,
    "addressLocalZones" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "colabStatus" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "addressLocalCode" TEXT NOT NULL,
    "addressLocalZone" TEXT NOT NULL,
    "addressLocal" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_Hash" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "upc" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "tax_id" INTEGER NOT NULL,
    "photo" TEXT NOT NULL,
    "packOrUn" "PackOrUnit" NOT NULL,
    "packUnQt" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "productCategoryId" INTEGER,
    "stockRecQt" INTEGER NOT NULL,
    "alert1" INTEGER NOT NULL,
    "alert2" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stockControl_id" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "taxes" (
    "id" SERIAL NOT NULL,
    "taxValue" INTEGER NOT NULL DEFAULT 23,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "taxes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productCategory" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "productCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "taxNumber" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "addressLocalCode" TEXT NOT NULL,
    "addressLocalZone" TEXT NOT NULL,
    "addressLocal" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "paymentCond" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storageLocation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "storageLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stockControl" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "storageLocationIn_id" INTEGER,
    "storageLocationOut_id" INTEGER,

    CONSTRAINT "stockControl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companyInfo_email_key" ON "companyInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "products_upc_key" ON "products"("upc");

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_email_key" ON "suppliers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "storageLocation_name_key" ON "storageLocation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "stockControl_storageLocationIn_id_key" ON "stockControl"("storageLocationIn_id");

-- CreateIndex
CREATE UNIQUE INDEX "stockControl_storageLocationOut_id_key" ON "stockControl"("storageLocationOut_id");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "taxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "productCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_stockControl_id_fkey" FOREIGN KEY ("stockControl_id") REFERENCES "stockControl"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationIn_id_fkey" FOREIGN KEY ("storageLocationIn_id") REFERENCES "storageLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationOut_id_fkey" FOREIGN KEY ("storageLocationOut_id") REFERENCES "storageLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
