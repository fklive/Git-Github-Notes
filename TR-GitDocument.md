
# Git nedir?
Git, dağıtılmış versiyon ve kontrol sistemidir.Yazılım geliştirmede kullanılan git kullanıcıya ilgili projeleri birden fazla kişi ile paralel geliştirme, geri alma, projenin farklı versiyonlarına erişme, bu versiyonları düzenleyebilme gibi özellikler sağlar.

Git, yukarıda kısaca saydığım özellikleri -ve daha fazlasını- çevrimdışı yapma olanağı sağlar.Yani her kullanıcı kişisel bilgisayarından git ile projelerini yönetebilir.Eğer projelerinizi açık bir şekilde yayınlamak istiyorsanız, ya da ekipçe paralel bir proje geliştirmek istiyorsanız o zaman imdadınıza git tabanlı projeleri barındıran & yönetilmesini sağlayan platformlar yetişir.En popüleri Github’dır.Alternatif olarak GitLab ve BitBucket da bilinen platformlardır.

## Nasıl Çalışır?
Git’in size vaat ettiği özellikleri sağlayabilmesi için projenizi tanıması lazım.Bunin için ilgili dizinde `git init` komutunu çalıştırmak gerekir.Bu komut çalıştıktan sonra `.git` adlı bir klasör oluşur ve git projeniz için bir hafıza ayırır.

Diyelim ki ilgili projemizi geliştirdik ve Github vb. bir platforma yüklemek istiyoruz.Bunun için bildiğimiz üzere bazı git komutları kullanırız.(Eğer git komutlarına aşina değilseniz [buradan](https://github.com/fklive/Git-Github-Notes/blob/main/101/git_notes.js) inceleyebilirsiniz).Peki burada arka planda kodlarımız nasıl tutuluyor, gelin beraber inceleyelim.

![Drawing 2023-12-02 20 12 10 excalidraw](https://github.com/fklive/Git-Github-Notes/assets/40389039/0bcf2b20-3373-453f-b9ef-a1ad964e8a1a)

**Lokalimizde git ile geliştirme yapmaya başladığımızda 3 farklı çalışma alanı kullanırız :**

**1.Working Area :** Kısaca lokal alanımız.Burada kodlarımızı ekledik & çıkardık, ancak git’in daha burada bir şeyler olduğundan haberi yok.

**2.Staging Area:** Çalışmalarımız belirli bir düzeye ulaştığında artık diğer platformlara iletmek isteriz. `git add` dediğimiz andan itibaren kodlarımız bu alana geçer ve artık git’in bir şeyler yaptığımızdan haberi olur, ancak git bazında hala bir iz bırakmış olmayız.

**3.Local Repo:** Bu alan git bazında bir iz (history) bıraktığımız yer. `git commit` kullandığımız andan itibaren kodlar bu kısma geçer ve git bazında bir history oluşur.Daha sonra eklenecek olan değişiklikler ile beraber bu değişiklik görüntülenebilir ve erişilebilir.


Son olarak `git push` komutunu kullandığımızda Github vb. platforma kodlarımız depolanmış olur.
