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
    "email" TEXT NOT NULL,
    "password_Hash" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "colabStatus" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "addressLocalCode" TEXT NOT NULL,
    "addressLocalZone" TEXT NOT NULL,
    "addressLocal" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "upc" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "tax_id" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "isPack" BOOLEAN NOT NULL DEFAULT false,
    "packUnQt" INTEGER NOT NULL,
    "expirationDate" TEXT,
    "category_id" TEXT NOT NULL,
    "stockRecQt" INTEGER,
    "alert1" INTEGER,
    "alert2" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "taxes" (
    "id" TEXT NOT NULL,
    "taxValue" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "taxes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_categories" (
    "id" TEXT NOT NULL,
    "productCategory" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" TEXT NOT NULL,
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
    "paymentCondTerm" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storageLocation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "storageLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stockControl" (
    "id" TEXT NOT NULL,
    "productUPC" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "isOut" BOOLEAN NOT NULL DEFAULT true,
    "storageLocationId" TEXT NOT NULL,

    CONSTRAINT "stockControl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "companyInfo_email_key" ON "companyInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "taxes_taxValue_key" ON "taxes"("taxValue");

-- CreateIndex
CREATE UNIQUE INDEX "product_categories_productCategory_key" ON "product_categories"("productCategory");

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_email_key" ON "suppliers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "storageLocation_name_key" ON "storageLocation"("name");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_tax_id_fkey" FOREIGN KEY ("tax_id") REFERENCES "taxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "product_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stockControl" ADD CONSTRAINT "stockControl_storageLocationId_fkey" FOREIGN KEY ("storageLocationId") REFERENCES "storageLocation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
