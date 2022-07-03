<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Collection;

class CollectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\Collection::create
        $collection=[[
            'icon' => 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
            'collection_name' => 'Island'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
            'collection_name' => 'Beach'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
            'collection_name' => 'Pool'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
            'collection_name' => 'OMG!'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
            'collection_name' => 'National Park'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
            'collection_name' => 'Cabinet'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg',
            'collection_name' => 'Design'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
            'collection_name' => 'Arctic'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
            'collection_name' => 'Tiny homes'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
            'collection_name' => 'Lakefront'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg',
            'collection_name' => 'Camping'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
            'collection_name' => 'Amazing View'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
            'collection_name' => 'Cave'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
            'collection_name' => 'Surfing'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg',
            'collection_name' => 'A-frame'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
            'collection_name' => 'Earth homes'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
            'collection_name' => 'Tropical'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg',
            'collection_name' => 'Bed&Breakfast'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
            'collection_name' => 'Luxe'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
            'collection_name' => 'Iconic cities'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg',
            'collection_name' => 'Shard house'
        ],[
            'icon' => 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
            'collection_name' => 'Castles'
        ]];
        Collection::insert($collection);
    }
}
