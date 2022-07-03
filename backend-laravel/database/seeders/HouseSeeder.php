<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\House;

class HouseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $houses=[[
            'image' => 'https://a0.muscache.com/im/pictures/765acada-1030-4bf4-908d-1c9e8f0b95bf.jpg?im_w=720',
            'description' => 'Nordlan, Norway',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 291,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/20b881d6-9fd9-4e12-9fc2-a5913d469fd2.jpg?im_w=720',
            'description' => 'Gilseskal, Norway',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 224,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720',
            'description' => 'Sali, Croatia, Croatia',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 150,
            'collection_id' => 1 
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/03bf7345-f535-4266-9bb1-b1a84d464d1c.jpg?im_w=720',
            'description' => 'Murtur, Croatia',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 200,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-48729525/original/f62e1b1a-d6af-438b-82ce-95c51a4e0ca1.jpeg?im_w=720',
            'description' => 'Vis, Croatia',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 200,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/miso/Hosting-555701192524977533/original/234db0e5-8ef3-45c4-9cf9-d2c5eb8ad0c0.jpeg?im_w=720',
            'description' => 'Opcina Lastovo, Croatia',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 200,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/177ed8a7-557b-480f-8319-4f8330e2c692.jpg?im_w=720',
            'description' => 'Uusikaupunki, Finlad',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 200,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/1073889a-f424-4254-9d57-32fb7baab653.jpg?im_w=720',
            'description' => 'Gildeskal, Norway',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 224,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/a4550fcc-8aad-4f2a-a602-eabcca3cf3dd.jpg?im_w=720',
            'description' => 'Skalen, Sweden',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 200,
            'collection_id' => 1 
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/c0e10c8f-d0c3-4875-bae8-0f664a55bbc6.jpg?im_w=720',
            'description' => 'Ytteran, Sweden',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 292,
            'collection_id' => 1 
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/miso/Hosting-52159627/original/d727cf6e-4787-4b38-a86f-0cd8d91d02b2.png?im_w=720',
            'description' => 'Raa Atoll, Maldives',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 1027,
            'collection_id' => 1 
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/8243ac5b-e689-4245-beae-cc15bd0804f5.jpg?im_w=720',
            'description' => 'Murtur, Croatia',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 310,
            'collection_id' => 1
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/f18e9327-02a2-4708-872d-5b14b9e6bc1a.jpg?im_w=320',
            'description' => 'Ayia Napa, Cyprus',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 130,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/miso/Hosting-598478687556252387/original/117342f9-3cea-4ab7-b4e0-73dc5fe70c2e.jpeg?im_w=320',
            'description' => 'Bodrum, Turkey',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 221,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/4ed6a21e-812f-4a08-b6a3-ceacb0f26f0a.jpg?im_w=320',
            'description' => 'Rodos, Greece',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 60,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/111262885/a7163c20_original.jpg?im_w=320',
            'description' => 'Muratpasa, Turkey',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 83,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/miso/Hosting-42771461/original/9dd0cebe-ad4b-42a6-aeaf-cbd1ab589f7d.jpeg?im_w=320',
            'description' => 'Lindos, Greece',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 298,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-638899983474769757/original/2650229f-79ce-458b-9352-850c632ef7aa.jpeg?im_w=320',
            'description' => 'Protaras, Cyprus',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 333,
            'collection_id' => 2 
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/aa597965-46fe-4458-a9be-0c753417fca3.jpg?im_w=320',
            'description' => 'Kissonegra, Cyprus',
            'location' => 5.459,
            'rate' => 0,
            'ppn' => 733,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/miso/Hosting-18183909/original/8663ccdf-46a9-4663-bdcd-8cba627e961b.jpeg?im_w=320',
            'description' => 'Kas, Turkey',
            'location' => 5.459,
            'rate' => 3.5,
            'ppn' => 200,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/10295669-97ef-4e5f-883b-ffb2b4cf4225.jpg?im_w=320',
            'description' => 'TR, Turkey',
            'location' => 5.459,
            'rate' => 4.3,
            'ppn' => 200,
            'collection_id' => 2
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/744d4c53-37fc-4b11-9f5f-8657574fcf97.jpg?im_w=320',
            'description' => 'Kas, Turkey',
            'location' => 5.459,
            'rate' => 3.98,
            'ppn' => 498,
            'collection_id' => 2 
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/20678595-794c-46b1-91ef-b73ac9daa56b.jpg?im_w=320',
            'description' => 'lindos, Greece',
            'location' => 5.459,
            'rate' => 4.76,
            'ppn' => 200,
            'collection_id' => 2 
        ],[
            'image' => 'https://a0.muscache.com/im/pictures/9ed94d17-26d8-4786-b3ed-6ffea7a2b5ef.jpg?im_w=320',
            'description' => 'Lindos, Greece',
            'location' => 5.459,
            'rate' => 3.8,
            'ppn' => 500,
            'collection_id' => 2
        ]
        ];
        House::insert($houses);
    }
}
