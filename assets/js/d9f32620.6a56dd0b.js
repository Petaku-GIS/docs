"use strict";(self.webpackChunkpetaku_docs=self.webpackChunkpetaku_docs||[]).push([[914],{3905:function(a,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var o=n.createContext({}),u=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},p=function(a){var e=u(a.components);return n.createElement(o.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,o=a.parentName,p=l(a,["components","mdxType","originalType","parentName"]),k=u(t),m=i,c=k["".concat(o,".").concat(m)]||k[m]||d[m]||r;return t?n.createElement(c,s(s({ref:e},p),{},{components:t})):n.createElement(c,s({ref:e},p))}));function m(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,s=new Array(r);s[0]=k;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=a,l.mdxType="string"==typeof a?a:i,s[1]=l;for(var u=2;u<r;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2900:function(a,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),s=["components"],l={slug:"handling-million-point-location-with-server-side-leaflet-marker-cluster",title:"Handling million point location with leaflet map without crashing the browser",authors:["slorber"],tags:["gis","lealfet","clustering","bigdata"]},o=void 0,u={permalink:"/docs/blog/handling-million-point-location-with-server-side-leaflet-marker-cluster",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Handling million point location with leaflet map without crashing the browser",description:"Demo",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"gis",permalink:"/docs/blog/tags/gis"},{label:"lealfet",permalink:"/docs/blog/tags/lealfet"},{label:"clustering",permalink:"/docs/blog/tags/clustering"},{label:"bigdata",permalink:"/docs/blog/tags/bigdata"}],readingTime:7.08,truncated:!1,authors:[{name:"Alfiankan",title:"-",url:"https://github.com/alfiankan",imageURL:"https://avatars.githubusercontent.com/u/40946917?v=4",key:"slorber"}],frontMatter:{slug:"handling-million-point-location-with-server-side-leaflet-marker-cluster",title:"Handling million point location with leaflet map without crashing the browser",authors:["slorber"],tags:["gis","lealfet","clustering","bigdata"]}},p={authorsImageUrls:[void 0]},d=[{value:"Preface",id:"preface",level:2},{value:"Leaflet Marker",id:"leaflet-marker",level:2},{value:"Clustering",id:"clustering",level:2},{value:"Server side clustering",id:"server-side-clustering",level:2},{value:"Percobaan",id:"percobaan",level:2},{value:"Membuat API",id:"membuat-api",level:4},{value:"Wrap it up",id:"wrap-it-up",level:2}],k={toc:d};function m(a){var e=a.components,l=(0,i.Z)(a,s);return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:""}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo",src:t(5977).Z,title:"Demo",width:"800",height:"433"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We've also published this post in bahasa at ",(0,r.kt)("a",{parentName:"p",href:"https://petaku-gis.github.io/docs/blog/"},"https://petaku-gis.github.io/docs/blog/"))),(0,r.kt)("h2",{id:"preface"},"Preface"),(0,r.kt)("p",null,"Web GIS adalah salah satu solusi untuk publikasi sistem informasi geografis yang dapat diakses lebih flexibel antar platform tanpa memerlukan instalasi aplikasi, dengan cukup mengakses melalui browser kita dapat menampilkan dan menggunakan sistem informasi geografis terutama dalam bentuk Peta digital. 11 tahun yang lalu Volodymyr Agafonkin membuat sebuah library open source bernama ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Leaflet/Leaflet"},"leaflet")," dengan sampai sekarang memiliki 700 lebih contributor dan 34 ribu stars di github. Leaflet memiliki banyak fitur dari dasar yaitu visualisasi peta dasar sampai plugins plugins yang dibuat komunitas yang sangat banyak."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Leaflet",src:t(3183).Z,title:"leaflet map",width:"1724",height:"596"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="baisc map init in leaflet"',title:'"baisc',map:!0,init:!0,in:!0,'leaflet"':!0},"var map = L.map('map').setView([51.505, -0.09], 13);\n\nL.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n}).addTo(map);\n\nL.marker([51.5, -0.09]).addTo(map)\n    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')\n    .openPopup();\n")),(0,r.kt)("h2",{id:"leaflet-marker"},"Leaflet Marker"),(0,r.kt)("p",null,"Leaflet marker adalah reperesentasi titik lokasi pada peta dari spatial data, leaflet secara out of the box sudah support untuk menampilkan marker dan dapat di konfigurasi sesuai kebutuhan, untuk data dengan kuantitas yang tidak terlalu banyak tidak akan terjadi problem, namun ketika ada keperluan untuk menampikan data yang banyak dan besar, lefalet akan membuat element di atas base map semakin banyak semakin membuat browser bekerja keras bahkan crash."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Snap",src:t(3780).Z,title:"browser crash",width:"1024",height:"546"})),(0,r.kt)("p",null,"Ini bukan problem dari leafletnya namun adalah bagaiman dari kita melakukan pendekatan untuk menampilkan data yang banyak secara lebih efisien, apalagi jika data kita sudah sangat banyak, banyak cara atau pendekatan yang dapat dilakukan mulai dari trnasformasi data misalkan dari point lokasi yang sangat banyak di lakukan pengelompokan ubah menjadi heatmap atau convex hull, atau pendekatan lain untuk me reduce data, dan cara yang lainya adalah menggunakan teknik clustering."),(0,r.kt)("h2",{id:"clustering"},"Clustering"),(0,r.kt)("p",null,"clustering adalah proses pengelompokan beberapa point location atau marker location. Ada beberapa teknik dan algoritma yang dapat digunakan salah satunya yang akan di pakai di artikel ini adalah kd tree, dimana akan emncari nearest neighboor dari point lokasi. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KD tree",src:t(969).Z,title:"KD tree",width:"1460",height:"619"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"KD tree",src:t(9757).Z,title:"https://towardsdatascience.com/geospatial-clustering-kinds-and-uses-9aef7601f386",width:"864",height:"768"})),(0,r.kt)("p",null,"processnya adalah dengan mencari point terdekat berdasarkan radius yang ditentukan lalu melakukan counting dan elminasi point lokasi sehingga menyisakan satu point lokasi saja."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Clustering",src:t(4014).Z,title:"Clustering",width:"201",height:"178"})),(0,r.kt)("p",null,"leflet sendiri memiliki plugins marker cluster untuk handle kasus peng klusterna ini, namun terbatas pada sisi browser atau client saja karena plugins tersebut adalah extensi dari leaflet sehingga akan sedikit sulit untuk membawanya ke sisi server/backend. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/supercluster"},"supercluster")," adalah library yang dibuat oleh team mapbox untuk dapat melakukan clustering secara terpisah dari leaflet sehingga processnya dapat dipisah dari browser, tujuanya adalah untuk memperingan kerja browser dalam melakukan rendering banyak data dan tidak membuat aplikasi kita crash."),(0,r.kt)("h2",{id:"server-side-clustering"},"Server side clustering"),(0,r.kt)("p",null,"seperti pada pembahasan section sebelumnya, bahwa ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/supercluster"},"supercluster")," adalah library yang dibuat oleh team mapbox untuk dapat melakukan clustering secara terpisah dari leaflet sehingga processnya dapat dipisah dari browser. untuk dapat melakukan teknik clustering dengan data yang besar tanpa membuat palikasi disisi client/browser menjadi hang atau crash karena proses rendering yang berat kita dapat melakukan pendekatan dengan memisahkan proses clustering dari browser ke sisi server dan melakukan filtering point location berdasarkan bounding box menggunakan postgis dengan mengamati bounding box pada view leaflet di sisi client  dengan tujuan untuk menapatkan proses yang lebih efisien lagi."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Client side clustering",src:t(6678).Z,title:"Client side clustering",width:"742",height:"211"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Server side clustering",src:t(6331).Z,title:"Server side clustering",width:"1393",height:"462"})),(0,r.kt)("p",null,"proses yang dilakukan di sisi server ketika menggunakan pendeketan server side adalah select filter -> clustering -> send response kurang lebih untuk proses data seperti berikut :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"clustering flow",src:t(4709).Z,title:"clustering flow",width:"567",height:"482"})),(0,r.kt)("p",null,"untuk dapat lebih wise lagi ada baiknya untuk membatasi max zoom dari map untuk menghindari proses klustering yang terlalu banyak namun tidak harus."),(0,r.kt)("p",null,"untuk sampai saat ini ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapbox/supercluster"},"supercluster")," dapat berjalan pada browser atau pada server dengan menggunakan Nodejs runtime. Akan sangat menarik jika dapat dilakukan porting ke bahasa lain dan mengimplementasikan konkurensi untuk menambah performa kecepatan clustering."),(0,r.kt)("h2",{id:"percobaan"},"Percobaan"),(0,r.kt)("p",null,"Untuk percobaan kita akan membuat sistem pemetaan sangat sederhana yaitu memetkana lokasi pengguna tweeter. untuk datanya kita dapatkan dari Kaggle di dataset berikut :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/sajidhasanapon/twitter-connections-with-user-location"},"Twitter Connections with User Location"),"\ndataset ini memiliki beberapa file yang akan digunakan adalah versi 1 juta data, file tersebut memiliki size ",(0,r.kt)("inlineCode",{parentName:"p"},"38 MB")," dan ketika di konversi ke geojson size nya menjadi ",(0,r.kt)("inlineCode",{parentName:"p"},"230mb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"untuk database menggunakan Postgres dengan tambahan postgis untuk operasi spatial dan supaya dapat melakukan envelop pada sisi databse. Pada percobaan ini hanya menggunakan satu tabel seperti berikut :"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"erd",src:t(3573).Z,title:"erd",width:"1000",height:"374"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"untuk melakukan seeding perlu sudah kita siapkan script untuk melakukan itu di ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/alfiankan/leaflet-server-side-marker-cluster.git"},"https://github.com/alfiankan/leaflet-server-side-marker-cluster.git"),", jalankan dengan node runtime ",(0,r.kt)("inlineCode",{parentName:"li"},"node import.js")," pastikan sebelum menjalankan sudah merubah konfigurasi databse sesuai yang anda gunakan")),(0,r.kt)("h4",{id:"membuat-api"},"Membuat API"),(0,r.kt)("p",null,"kita akan menggunaka NodeJS runtime dan typescript untuk emmbuat location http API. anda dapat melakukan clone dari repository yang kita buat ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/alfiankan/leaflet-server-side-marker-cluster.git")," berikut adalah penjelasnya :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Location Repository\npada class ini terdapat method untuk melakukan query ke postgres dengan extensi postgis yaitu envelop dimana digunakan untuk melakukan seleksi point lokasi pada bounding box yang telah ditentukan")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/repositories/Locations.ts"',title:'"api/repositories/Locations.ts"'},'\nimport { DatabaseError, Pool, QueryResult } from "pg";\nimport { Point } from "../entities/Point";\n\nclass Locations {\n    private db: Pool\n    constructor(pool: Pool) {\n        this.db = pool\n    }\n\n    getPointsInsideBoundingBox(west: string, south: string, east: string, north: string): Promise<QueryResult<any>> {\n        return this.db.query({\n            text: "SELECT id, ST_Y(location) AS y, ST_X(location) as x FROM marker_cluster u WHERE location && ST_MakeEnvelope($1, $2, $3, $4, 4326)",\n            values: [west, south, east, north]\n        })\n    }\n\n}\n\nexport { Locations }\n\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Clustering Use Case\nPada class ini berisi use case untuk melakukan clustering dengan library ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mapbox/supercluster"},"supercluster")," dimana library ini menggunakan kdbush (kd tree) untuk teknik clustering nya. pada proses ini juga dilakukan transformasi ke DTO GeoJSON.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="api/usecases/LocationCluster.ts',title:'"api/usecases/LocationCluster.ts'},'\nimport { Locations } from \'../repositories/Locations\'\nimport Supercluster = require(\'supercluster\')\n\nclass LocationCluster {\n    private locationRepository: Locations\n    constructor(locationsRepository: Locations) {\n        this.locationRepository = locationsRepository\n    }\n\n    async getClusteredPoint(west: number, south: number, east: number, north: number, zoom: number): Promise<Array<Supercluster.ClusterFeature<any>>> {\n        const [locations] = await Promise.all([\n            this.locationRepository.getPointsInsideBoundingBox(\n                String(west),\n                String(south),\n                String(east),\n                String(north),\n            )\n        ])\n\n        // converting to .geojson features array\n        let geojson = new Array<any>()\n        locations.rows.map(point => {\n            geojson.push({\n                "type": "Feature",\n                "geometry": {\n                    "type": "Point",\n                    "coordinates": [point.x, point.y]\n                },\n                "properties": {\n                    "name": point.id\n                }\n            })\n        })\n\n        const clustersIndexes = new Supercluster({\n            log: true,\n            radius: 80,\n            maxZoom: 17\n        });\n\n        clustersIndexes.load(geojson)\n\n\n        return clustersIndexes.getClusters([west, south, east, north], zoom)\n    }\n\n}\n\nexport { LocationCluster }\n\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"HTTP Handler\nuntuk handling request kita menggunaka expressjs dengan endpoint ",(0,r.kt)("inlineCode",{parentName:"li"},"/points")," dengan query params bounding box dan zoom uyang kita dapat dari leaflet, kurang lebih akan berbentuk seperti berikut")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="location request"',title:'"location','request"':!0},"http://localhost:3000/points?west=-74.37604665756227&south=40.74525741379786&east=-74.34858083724977&north=40.75104456155781&zoom=16\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Map Client\nuntuk menampilkan peta dan marker cluster kita menggunakan leaflet, pada percobaan ini kita hanay membuat satu file html dengan js script di dalamnya untuk handling leafelt nya, pada client terdapat algoritma untuk menyesuaikan icon marker cluster dan menampilkan total point location dari sebuah cluster berikut adlah potongan javascript dari index.html")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="public/index.html"',title:'"public/index.html"'},"\n        const loading = document.getElementById('loading')\n        let isLoading = false\n        function getJSON(url, callback) {\n\n            const xhr = new XMLHttpRequest();\n            xhr.open('GET', url, true);\n            xhr.responseType = 'json';\n            xhr.setRequestHeader('Accept', 'application/json');\n            xhr.onload = function () {\n                if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300 && xhr.response) {\n                    callback(xhr.response);\n                }\n            };\n            xhr.send();\n        }\n\n        const map = L.map('map').setView([0, 0], 2);\n\n        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n            attribution: '&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors'\n        }).addTo(map);\n\n        const markers = L.geoJson(null, {\n            pointToLayer: createClusterIcon\n        }).addTo(map);\n\n\n        function update() {\n\n            if (isLoading) {\n                return\n            }\n            isLoading = true\n\n            const bounds = map.getBounds();\n            console.log(bounds)\n            console.log({\n                bbox: [bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth()],\n                zoom: map.getZoom()\n            });\n\n            console.log(bounds.getWest(), bounds.getSouth(), bounds.getEast(), bounds.getNorth(), map.getZoom())\n\n            loading.innerHTML = `Processing ...`\n            const before = new Date();\n            getJSON(`http://localhost:3000/points?west=${bounds.getWest()}&south=${bounds.getSouth()}&east=${bounds.getEast()}&north=${bounds.getNorth()}&zoom=${map.getZoom()}`, (geojson) => {\n                console.log(geojson);\n                markers.clearLayers();\n                markers.addData(geojson);\n\n                const now = new Date();\n                const diff = now - before;\n                loading.innerHTML = `Took  ${diff} milliseconds`\n                isLoading = false\n            });\n        }\n\n        map.on('moveend', update);\n\n        map.whenReady(update);\n\n\n        function createClusterIcon(feature, latlng) {\n\n            if (!feature.properties.cluster) {\n\n                const tweetIcon = L.icon({\n                    iconUrl: 'http://localhost:3000/twitter.svg',\n                    iconSize: [40, 40], // size of the icon\n                });\n                let singleMarker = L.marker(latlng, { icon: tweetIcon }).bindPopup(feature.properties.name);\n                singleMarker.on('mouseover', function (e) {\n                    this.openPopup();\n                });\n                singleMarker.on('mouseout', function (e) {\n                    this.closePopup();\n                });\n                return singleMarker\n            }\n\n            const count = feature.properties.point_count;\n            const size =\n                count < 100 ? 'small' :\n                    count < 1000 ? 'medium' : 'large';\n            const icon = L.divIcon({\n                html: `<div><span>${feature.properties.point_count_abbreviated}</span></div>`,\n                className: `marker-cluster marker-cluster-${size}`,\n                iconSize: L.point(40, 40)\n            });\n\n            return L.marker(latlng, { icon });\n        }\n\n")),(0,r.kt)("p",null,"untuk mengakses map client dapat diakses dari root path di ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Uji coba")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"untuk live demo dapat diakses melalui playground Petaku platform ",(0,r.kt)("a",{parentName:"li",href:"https://playground.petaku.xyz/clustering"},"demo clustering"),", Development of Petaku GIS Platform, No Code Easy to use GIS Platform")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Demo",src:t(5977).Z,title:"Demo",width:"800",height:"433"})),(0,r.kt)("h2",{id:"wrap-it-up"},"Wrap it up"),(0,r.kt)("p",null,"begitulah salah satu pendektana untuk handle juataan data point lokasi pada leaflet dengan teknik server side clustering, tentu akan banyak hal yang dapat di improve maka dari itu tetap keep exploring. terimakasih..."))}m.isMDXComponent=!0},6678:function(a,e,t){e.Z=t.p+"assets/images/clientside-792bc68e615117c850ab0c9f0b3607af.png"},4014:function(a,e,t){e.Z=t.p+"assets/images/cluster-82e2565d3bbdd7d88efa154337a2e50b.gif"},9757:function(a,e,t){e.Z=t.p+"assets/images/clustering-69adb9474e9b2b201febfbf4a173e339.png"},5977:function(a,e,t){e.Z=t.p+"assets/images/demo-d88901584e3933a2223e8fb83ef00164.gif"},3573:function(a,e,t){e.Z=t.p+"assets/images/erd-2b8508b7c9b522cd338ea25da6547d6e.png"},4709:function(a,e,t){e.Z=t.p+"assets/images/flow-71d69d055dacadef3ff39f51cbbed507.png"},969:function(a,e,t){e.Z=t.p+"assets/images/kd-tree-c350da9a7bbc88aee8a957d0a02b74d2.jpg"},3183:function(a,e,t){e.Z=t.p+"assets/images/leaflet-0bf3591a2b74f735f2c199ae28a7604f.png"},6331:function(a,e,t){e.Z=t.p+"assets/images/serverside-0a106ca9d160a8877709331e7f281373.png"},3780:function(a,e,t){e.Z=t.p+"assets/images/snap-0bb0718ab46663d70a46f875f7656132.png"}}]);