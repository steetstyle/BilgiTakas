import { observable, action } from "mobx";

class LessonStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable items = [];
  @observable selectedLesson = null;
  @observable selectedQuestion = null;
  @observable selectedStep = null;

  @action 
  selectLesson(lesson){
      this.selectedLesson = lesson;
  }

  @action 
  selectQuestion(qs){
      this.selectedQuestion = qs;
  }
  
  @action
  selectStep(step){
      this.selectedStep = step;
  }

  @action
  fetchItems(data) {
    this.items = [
        {
            title:"Termodinamik ve Akışkanlar",
            text: "Ders",
            categories:[
                {
                    id:1,
                    title:'1. Hafta Onerilen Problemler',
                    questions:[
                        {
                            title:' Problem 1',
                            steps:[
                                {
                                    title:'Soru oku',
                                    extra_title:'Soru oku',
                                    is_step:false,
                                    description:`Kütlesi ihmal edilebilir bir kapta 50.0 C sıcaklıkta 0.200 kg su bulunmaktadır. Su ile 100.0 C sıcaklıkta ve atmosfer basıncında 0.0400 kg buhar temas ettirildikten sonra sistemin erişecegi son sıcaklıgı ve bu sıcaklıktaki buhar ve sıvı su miktarlarını hesaplayınız. ( Csu = 4190 J/kg.K, suyun buharlaşma ısısı: 2256 × 103 J/kg) (C: 100.0 C, 0.0214 kg buhar, 0.219 kg sıvı su)`,
                            
                                },
                                {
                                    is_step:true,
                                    title:'Verilenleri Topla',
                                    extra_title:'Verilenleri Topla',
                                    description:`T_{buhar}=100C,\\newline m_{buhar}=0.04kg,\\newline m_{su}=0.2kg,\\newline T_{su}=50C `,
                                },
                                {
                                    is_step:true,
                                    extra_title:'Termik Isıları toplayıp sıfıra eşitle (Denklem)',
                                    title:'Buharı suya eklerken sıcaklığı düşer ve yoğuşmaya başlar ve termik dengedeki ısı enerjisi sıfıra eşittir',
                                    description:`Q_{su} + Q_{buhar} = 0 \\newline m * c * \\delta{T} + [ -m * L_{v}] = 0 \\newline m * c * \\delta{T} = m_{s} * \\delta{T} `
                                },
                                {
                                    is_step:true,
                                    extra_title:'Termik Isıları toplayıp sıfıra eşitle (Çözüm)',
                                    title:'Buharı suya eklerken sıcaklığı düşer ve yoğuşmaya başlar ve termik dengedeki ısı enerjisi sıfıra eşittir',
                                    description:`0.2kg * 4190J/kg \\cdot K * [T - 50] \\newline =  \\newline 0.04kg * 2256 * 10^{6}J/kg \\newline T = 157C`
                                },
                                {
                                    is_step:true,
                                    extra_title:'Termik Isıları toplayıp sıfıra eşitle (Anlamı)',
                                    title:'Bu, su tarafından emilen tüm buharın emilmediği anlamına gelir, çünkü tüm buhar suya dönüştürülemez, bu nedenle son sıcaklık 100c olur',
                                    description:`T = 157C`
                                },
                                {
                                    is_step:true,
                                    extra_title:'İki elementin ağırlığını hesapla',
                                    title:'Molar Isı ağası Formülünü kullan (Denklem)',
                                    description:`Q = mc\\Delta{T} \\newline m_{buhar} = \\frac Q L_{vs}`
                                },
                                {
                                    is_step:true,
                                    extra_title:'İki elementin ağırlığını hesapla',
                                    title:'Molar Isı ağası Formülünü kullan (Çözüm)',
                                    description:`m_{buhar} = \\frac Q L_{vs} \\newline \\frac {4.19*10^4J} {2256*10^3J/kg} \\newline =0.0186kg`
                                },
                                {
                                    is_step:false,
                                    extra_title:'İki elementin ağırlığını hesapla',
                                    title:'Molar Isı ağası Formülünü kullan (Anlamı)',
                                    description:`Ne zaman sıcaklık 4.19 x 10^4 J lük ısı su tarafından emilirse \n\n Bunu Q = [m x C x δT]su \n\n S dan buhara dönüştürülen toplam ağırlık 0.0186kg \n\n Şimdi buhardan suya dönüşmemiş olan ağırlığı hesaplamaya çalışırsak \n\n 0.400 - 0.0.186 = 0.214kg ve su ve buhar halen konteynırımızın için buharın ağırlığınıda toplama ekleyip hesaplarsak yoğunlaşmış buhar ile birlikte \n\n Suyun toplam ağırlığı 0.0186 + 0.2 = 0.219kg olmuş olur.`
                                }
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title:"Kalkülüs II",
            text: "Ders",
            categories:[
            ]
        },
        {
            title:"Elektrik ve Manyetizma",
            text: "Ders",
            categories:[
            ]
        },
        {
            title:"Bilgisayar Programlama",
            text: "Ders",
            categories:[
            ]
        },
        {
            title:"Ders Kalmadı",
            text: "Ders",
            categories:[
            ]
        },
      ];
    this.isLoading = false;
  }
}

export default LessonStore;
