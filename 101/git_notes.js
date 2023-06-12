/*
var gitNotes = {
    git: Versiyon kontrol sistemidir,
    git config --global user.name: Kullanıcı adınızı oluşturur & görüntülersiniz
    git config --global email : E-mail bilginizi oluşturur & görüntülersiniz.

    git status : Projedeki dosyaların durumunu gösterir (Commit olmuş mu hangi, eklenmiş mi?)
    git init: Bir projeyi git sistemi ile kullanmak isterseniz git'i başlatmaya yarar 
        -1 kere çalıştırılması yeterli.'-
    git add 'dosya adı' : Adı verilen dosyayı ekler
    git add . : Commit olmayan tüm dosyaları ekler.
    git commit -m 'commit açıklaması' : Eklenen dosyalar & değişiklikleri açıklamasıyla birlikte commit eder (sisteme geçirir)
    git commit : Commit işlemini yapar ancak mesajı kendi oluşturur ve size onaylatır.
    git commit -a : Önce 'add' işlemi yapar artından commit eder.
    git log : İlgili projeye ait tüm atılan commitleri ve commit mesajlarını gösterir

    .gitignore : Versiyon kontrolü yapılmasını istemediğiniz dosyaları eklediğiniz komut.İçine koyulan dosyalar commit olmaz.(touch anahtarı ile oluşturulur - touch .gitignore)
    git branch 'branch name' : Yeni branch oluşturur (Branch adı verilmeden çağırılırsa mevcut branchleri gösterir)
    git switch 'branch name' : Verilen branch'e geçer.
    git merge : İki branchi birleştirir (Örn: main ve feature adlı 2 branchimiz olsun.Main'deyken çalıştırırsak feature'i maine merge eder.)

    fast_foward : Eğer gelitşirme yaptığımız branch süresince main branchte bir commit olmazsa, ve bu branchi maine merge edersek direk merge olur.Bu işleme fast foward denir.
    
    git stash : Bir brachde değişiklik yapıp; commit etmeden başka bir branch'e geçersek değişiklik yaptığımız dosyalar & kodlar geçtiğimiz branch'de gözükür ve karmaşaya sebep olur.
        git stash bu commit edilmeyen değişikleri ara bir repoda tutarak karmaşayı önler
    git stash list : Bu ara repoda tutulan stashlerin listesini getirir.
    git stash pop : Repoda saklanan kod bloğunu tekrar çıkarır(En son ekleneni).
    git stash apply : Bu ara repoda tutulan stash'i geri getirir, ancak stash repodan silinmez!
    git stash apply 'stash name' : adı verilen stash'i çıkarır.

    git restore 'dosya adı' : ilgili dosyanın bir önceki commitine döner.

    git checkout 'git log' daki hash numarası' : Bir önceki ya da istenilen commite gider
        ?NOT : Bu komut uygulanırsa HEAD ve branch'de kopukluk oluşturur, (HEAD Detached hatası) bunu engellemek için : 
        ?1.git switch 'branch name'  -> bir önceki branche geri dön
        ?2. yeni branch açıp oradan devam et.

        ?YA DA 
        ?git reset 'git log ' daki gidilecek hash' komutunu kullan
    
    git reset 'git log daki gidilmek istenen commitin hash numarası' : Yeni branch açmaya gerek kalmadan istenen commite geri döner.
        !Diğer commitlerin oluşturduğu kodları silmez!Sadece commitleri siler
    git reset --hard 'git log'daki gidilmek istenen commitin hash numarası' : Hem kodları hem commitleri silip ilgili commite döner
    git revert 'git log'daki gidilmek istenen commitin hash numarası' : Kodları siler, ancak commit ve logları silmez, üstüne yeni commit atar.

    git diff HEAD : HEAD commit ile diğerleri arasındaki fark
    git diff 'git log hash1' 'git log hash2' : 2 commit arasındaki fark
    git diff 'branch name' 'other branch name': 2 branch arasındaki fark

    git rebase : Merge commitleri elimine eder.
        !Logları bozabilir.
        !Başka kişilerde commitleri kullanıyorsa bu komut diğer kullanıcıları etkileyebilir.
        

    }
*/
