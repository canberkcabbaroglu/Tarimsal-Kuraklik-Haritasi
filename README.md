# TARIMSAL KURAKLIK HARİTALARININ İNTERNETTEN KULLANICILARA SUNUMU
## Çalışmanın Amacı
Çalışma açık kaynak kodlu CBS yazılımları kullanılarak tarımsal kuraklık haritalarının mekânsal bir veri tabanında saklanması, daha sonra bu verinin WGS 84 koordinat sistemi referans alınmak suretiyle geotiff veri formatına getirilmesiyle başlar. Bir sonraki adımda ise bu verilerin OpenLayers kütüphanesi ile geliştirilecek bir web uygulaması üzerinden; herhangi bir CBS bilgisi olmayan ve CBS programlarını kullanamayan vatandaşların hızlı ve kolay bir şekilde bu coğrafi verilere ulaşmasının sağlanması hedeflenir. Sonuç olarak web servislerinin hazırlanması ve geliştirilecek web uygulaması ile uzak kullanıcıların kullanımına açılması konularını kapsayan örnek bir uygulama geliştirilmesi amaçlanmaktadır. 
Tarımsal Kuraklık Haritalarının Sunumunun Yapıldığı İnternet Sitesi [jeodezi.net](https://jeodezi.net/).
## Çalışma Kapsamındaki Tanımlamalar
### GeoServer:
Java tabanlı yazılmış olan GeoServer, coğrafi verilerin OGC standartlarında web servisleri halinde sunulmasını sağlar. GeoServer, vektör (Oracle Spatial, ArcSDE, DB2, MySQL, PostGIS data, Shape files ve Web servisleri) ve raster (ArcGrid, GeoTiff, Jpeg2000, ECW, MrSID) verilerini kullanabilmektedir.
### OpenLayers:
Çok esnek , kullanıcı dostu ve anlaşılır bir javascript kütüphanesidir. Bu kütüphane sayesinde çok hızlı bir şekilde enteraktif web tabanlı CBS uygulamaları geliştirilebilir.
### GeoTIFF:
GeoTIFF, coğrafi referans bilgilerinin bir TIFF dosyasına gömülmesine izin veren bir genel alan meta veri standardıdır. Potansiyel ek bilgi, harita projeksiyonunu, koordinat sistemlerini, elipsoitleri, verileri ve dosya için tam bir mekansal referans oluşturmak için gereken her şeyi içerir.
### QGIS: 
Kullanıcı dostu açık kaynaklı CBS projesi olan QGIS birçok vektör ve raster verinin yanında OGC standartlarını da desteklemektedir. Dünya çapındaki birçok geliştiricinin geliştirmiş olduğu eklentileri kütüphanesinden indirerek programa ücretsiz olarak birçok özellik ekleyebilir yada kendi ihtiyaçlarınız doğrultusunda Python dili ile özel eklentiler ekleyebilirsiniz.
### PostGIS:
ESRI firmasının SDO veya Oracle veri tabanının spatial eklentisi gibi açık kaynak kodlu bir veri tabanı olan PostgreSQL veri tabanının coğrafi verileri tutabilmesi için geliştirilen bir ara katman mimarisidir.
### PostgreSQL:
PostgreSQL, veritabanları için ilişkisel modeli kullanan ve SQL standart sorgu dilini destekleyen bir veritabanı yönetim sistemidir. PostgreSQL aynı zamanda iyi performans veren, güvenli ve geniş özellikleri olan bir Veri Tabanı Yönetim Sistemi'dir. Hemen hemen tüm UNIX ya da Unix türevi işletim sistemlerinde çalışır.
## Tarımsal Kuraklık Haritalarının İnternetten Sunumu
![1](https://user-images.githubusercontent.com/74494292/106370077-efbf3900-6367-11eb-8196-043c48efea41.png)
## Tarımsal Kuraklık Haritalarının Sidebar Kulanımı
![2](https://user-images.githubusercontent.com/74494292/106370081-f948a100-6367-11eb-9dec-69c70d739a8c.jpg)
## Geoserver İle Haritaya Lejant Ekleme
![3](https://user-images.githubusercontent.com/74494292/106370082-fcdc2800-6367-11eb-9616-38d8c13c3cae.png)
