<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Product 1
        $product1 = new Product();
        $product1->setName('HP ProBook Laptop');
        $product1->setDescription('Professional laptop with Intel i7 processor, 16GB RAM and 512GB SSD');
        $product1->setPrice(1299.99);
        $manager->persist($product1);

        // Product 2
        $product2 = new Product();
        $product2->setName('LG 27" Monitor');
        $product2->setDescription('UltraHD 4K monitor with IPS panel and HDR');
        $product2->setPrice(349.99);
        $manager->persist($product2);

        // Product 3
        $product3 = new Product();
        $product3->setName('Logitech Mechanical Keyboard');
        $product3->setDescription('Gaming keyboard with Cherry MX switches and RGB backlight');
        $product3->setPrice(129.99);
        $manager->persist($product3);

        // Product 4
        $product4 = new Product();
        $product4->setName('Microsoft Wireless Mouse');
        $product4->setDescription('Ergonomic mouse with high-precision sensor and long-lasting battery');
        $product4->setPrice(49.99);
        $manager->persist($product4);

        // Product 5
        $product5 = new Product();
        $product5->setName('Sony WH-1000XM5 Headphones');
        $product5->setDescription('Premium headphones with noise cancellation and high-fidelity sound');
        $product5->setPrice(399.99);
        $manager->persist($product5);

        $manager->flush();
    }
}
