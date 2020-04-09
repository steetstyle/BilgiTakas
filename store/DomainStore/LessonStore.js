import { observable, action } from "mobx";

class LessonStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable items = [];
  @observable selectedLesson = null;
  @observable selectedQuestion = null;
  @observable selectedStep = null;
  @observable nextStep = null;

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
  selectNextStep(step){
      this.nextStep = step;
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
                                    index:0,
                                    title:'Soru oku',
                                    extra_title:'Soru oku',
                                    is_step:false,
                                    description:`Kütlesi ihmal edilebilir bir kapta 50.0 C sıcaklıkta 0.200 kg su bulunmaktadır. Su ile 100.0 C sıcaklıkta ve atmosfer basıncında 0.0400 kg buhar temas ettirildikten sonra sistemin erişecegi son sıcaklıgı ve bu sıcaklıktaki buhar ve sıvı su miktarlarını hesaplayınız. ( Csu = 4190 J/kg.K, suyun buharlaşma ısısı: 2256 × 103 J/kg) (C: 100.0 C, 0.0214 kg buhar, 0.219 kg sıvı su)`,
                            
                                },
                                {
                                    index:1,
                                    is_step:true,
                                    title:'Verilenleri Topla',
                                    extra_title:'Verilenleri Topla',
                                    description:`T_{buhar}=100C,\\newline m_{buhar}=0.04kg,\\newline m_{su}=0.2kg,\\newline T_{su}=50C `,
                                },
                                {
                                    index:2,
                                    is_step:true,
                                    extra_title:'Termik Isıları toplayıp sıfıra eşitle (Denklem)',
                                    title:'Buharı suya eklerken sıcaklığı düşer ve yoğuşmaya başlar ve termik dengedeki ısı enerjisi sıfıra eşittir',
                                    description:`Q_{su} + Q_{buhar} = 0 \\newline m * c * \\delta{T} + [ -m * L_{v}] = 0 \\newline m * c * \\delta{T} = m_{s} * \\delta{T} `
                                },
                                {
                                    index:3,
                                    is_step:true,
                                    extra_title:'Termik Isıları toplayıp sıfıra eşitle (Çözüm)',
                                    title:'Buharı suya eklerken sıcaklığı düşer ve yoğuşmaya başlar ve termik dengedeki ısı enerjisi sıfıra eşittir',
                                    description:`0.2kg * 4190J/kg \\cdot K * [T - 50] \\newline =  \\newline 0.04kg * 2256 * 10^{6}J/kg \\newline T = 157C`
                                },
                                {
                                    index:4,
                                    is_step:true,
                                    extra_title:'Termik Isıları toplayıp sıfıra eşitle (Anlamı)',
                                    title:'Bu, su tarafından emilen tüm buharın emilmediği anlamına gelir, çünkü tüm buhar suya dönüştürülemez, bu nedenle son sıcaklık 100c olur',
                                    description:`T = 157C`
                                },
                                {
                                    index:5,
                                    is_step:true,
                                    extra_title:'İki elementin ağırlığını hesapla',
                                    title:'Molar Isı ağası Formülünü kullan (Denklem)',
                                    description:`Q = mc\\Delta{T} \\newline m_{buhar} = \\frac Q L_{vs}`
                                },
                                {
                                    index:6,
                                    is_step:true,
                                    extra_title:'İki elementin ağırlığını hesapla',
                                    title:'Molar Isı ağası Formülünü kullan (Çözüm)',
                                    description:`m_{buhar} = \\frac Q L_{vs} \\newline \\frac {4.19*10^4J} {2256*10^3J/kg} \\newline =0.0186kg`
                                },
                                {
                                    index:7,
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
                {
                    id:1,
                    title:'Ekstra Ödev',
                    questions:[
                        {
                            title:'1.Problem',
                            steps:[
                                {
                                    index:0,
                                    title:'Q, -2Q ve Q değerlerine sahip üç yük, koordinat sisteminin x ekseni üzerine aralarındaki mesafeler l olacak şekide yan yana yerleştirilmiştir \n a) -2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyelini hesaplayın \n b) P noktasındaki elektrik alan vektörünü hesaplayın. \n c) Elektrik potansiyelin y << l ve y -> sonsuz limitlerindeki ifadelerini bulun.',
                                    extra_title:'Soruyu oku',
                                    is_step:false,
                                    description:`..... sorusu gelicek`,
                                    image:'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                },
                                {
                                    index:1,
                                    is_step:true,
                                    title:'-2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyeli hesapla',
                                    extra_title:'Adım 1',
                                    description:`\\text{Elektrik potansiyeli (V)} \\newline V = k_e \\frac {-2Q} {y} \\newline  `,
                                    image:null
                                },
                                {
                                    index:2,
                                    is_step:true,
                                    title:'dQ yu hesapla',
                                    extra_title:'Adım 2',
                                    description:`dq yu \\enspace hesaplayalım \\newline \\enspace \\newline dq = \\rho dA \\newline \\boxed{dq = \\rho 2 \\pi rdr}  \\newline \\enspace \\newline artık \\newline elektrik \\enspace potansiyelini \\newline hesaplayabiliriz \\enspace   `,
                                    image:null
                                },
                                {
                                    index:3,
                                    is_step:true,
                                    title:'Elektrik Potansiyelini hesapla',
                                    extra_title:'Adım 3',
                                    description:`V = \\int_{R_1}^{R_2} 2 \\pi \\rho k_{e} \\frac {rdr} {\\sqrt{r^2 + d^2}} \\newline \\enspace \\newline \\boxed{2 \\pi \\rho k_{e}} \\enspace sabit \\enspace olduğundan \\newline integralin \\enspace dışına \\enspace alalım \\newline \\enspace \\newline  V = 2 \\pi \\rho k_{e} \\int_{R_1}^{R_2}  \\frac {rdr} {\\sqrt{r^2 + d^2}}  `,
                                    image:null
                                },
                                {
                                    index:4,
                                    is_step:true,
                                    title:'Sonuç',
                                    extra_title:'Adım 4',
                                    description:`Elektrik Potansiyeli (V) \\newline \\enspace \\newline \\boxed{ \\pi \\rho k_{e} \\lparen\\sqrt{d^2 + {R_{2}}^{2}} - \\sqrt{d^2 + {R_{1}}^2} \\rparen}`,
                                    image:null
                                },
                              
                            ]
                        },
                        {
                            id:1,
                            title:'Ekstra Ödev',
                            questions:[
                                {
                                    title:'4.Problem',
                                    steps:[
                                        {
                                            index:0,
                                            title:'Düzgün Yüzeysel yük yoğunluna sahip iç yarı çapı R1 ve yapıçapı R2 olan yassı bir dis şekildeki gibi x eksenine dik olarak yerleştirilmiştir. Diskin merkezinden d kadar sağda, x ekseni üzezrindeki P noktasında elektrik potansiyelini (V) bulunuz. (Sonsuzdaki potansiyeli sıfır alınız.)(İpucu: qdüzgün yüklü, r yarıçaplı halka için P noktasındaki V = kq/kökiçi(d^2+r^2))',
                                            extra_title:'Soruyu oku',
                                            is_step:false,
                                            description:`..... sorusu gelicek`,
                                            image:'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                        },
                                        {
                                            index:1,
                                            is_step:true,
                                            title:'Nokta yüklü parçacığın elektrik potansiyelini hesapla',
                                            extra_title:'Adım 1',
                                            description:`Nokta \\enspace yüklü \\enspace parçacığın \\newline elektrik \\enspace potansiyeli : \\newline \\enspace \\newline dV = \\frac {k_{e}dq} {\\sqrt{\\smash[b]{ r^{2} + d^{2} }}}`,
                                            image:null
                                        },
                                        {
                                            index:2,
                                            is_step:true,
                                            title:'dQ yu hesapla',
                                            extra_title:'Adım 2',
                                            description:`dq yu \\enspace hesaplayalım \\newline \\enspace \\newline dq = \\rho dA \\newline \\boxed{dq = \\rho 2 \\pi rdr}  \\newline \\enspace \\newline artık \\newline elektrik \\enspace potansiyelini \\newline hesaplayabiliriz \\enspace   `,
                                            image:null
                                        },
                                        {
                                            index:3,
                                            is_step:true,
                                            title:'Elektrik Potansiyelini hesapla',
                                            extra_title:'Adım 3',
                                            description:`V = \\int_{R_1}^{R_2} 2 \\pi \\rho k_{e} \\frac {rdr} {\\sqrt{r^2 + d^2}} \\newline \\enspace \\newline \\boxed{2 \\pi \\rho k_{e}} \\enspace sabit \\enspace olduğundan \\newline integralin \\enspace dışına \\enspace alalım \\newline \\enspace \\newline  V = 2 \\pi \\rho k_{e} \\int_{R_1}^{R_2}  \\frac {rdr} {\\sqrt{r^2 + d^2}}  `,
                                            image:null
                                        },
                                        {
                                            index:4,
                                            is_step:true,
                                            title:'Sonuç',
                                            extra_title:'Adım 4',
                                            description:`Elektrik Potansiyeli (V) \\newline \\enspace \\newline \\boxed{ \\pi \\rho k_{e} \\lparen\\sqrt{d^2 + {R_{2}}^{2}} - \\sqrt{d^2 + {R_{1}}^2} \\rparen}`,
                                            image:null
                                        },
                                      
                                    ]
                                }
                            ]
                        }
                                ,
                        {
                            title:'5.Problem',
                            steps:[
                                {
                                    index:0,
                                    title:'Çizgisel yük yoğunluğu lambda olan bir tel şekilde gibi bükülmüştür. \n a) O noktasındaki elektrik potansiyelini bulunuz. \n b) O noktasındaki elektrik alan vektörünü bulunuz.',
                                    extra_title:'Soruyu oku',
                                    is_step:false,
                                    description:`..... sorusu gelicek`,
                                    image:'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                },
                                {
                                    index:1,
                                    is_step:true,
                                    title:'Nokta yüklü parçacığın elektrik potansiyelini hesapla',
                                    extra_title:'Adım 1',
                                    description:`Nokta \\enspace yüklü \\enspace parçacığın \\newline elektrik \\enspace potansiyeli : \\newline \\enspace \\newline dV = \\frac {k_{e}dq} {r} \\newline \\enspace \\newline Tel \\enspace büküldüğünden \\enspace toplam \\enspace elektrik \\newline potansiyelini \\enspace bulmak \\enspace için \\enspace parça \\newline parça \\enspace integre \\enspace etmemiz \\ gerek \\newline  \\enspace \\newline \\int_{-3R}^{-R} k_e \\frac {\\lambda dx} {-x} + \\int_{yrmdaire} k_e \\frac {\\lambda ds} {R} +  \\int_{R}^{3R} k_e \\frac {\\lambda dx} {x} `,
                                    image:null
                                },
                                {
                                    index:2,
                                    is_step:true,
                                    title:'Elektrik Potansiyelini hesapla',
                                    extra_title:'Adım 2',
                                    description:`Toplam \\enspace elektrik \\enspace potansiyeli (V) \\newline  \\newline \\enspace \\newline (bir \\enspace önceki \\enspace integral \\enspace sonucu)  \\newline {-k_{e} \\lambda ln(-x) |_{-3R}^{-R} + k_{e} \\frac {\\lambda \\pi R} {R} + k_e \\lambda lnx|_{R}^{3R}} \\newline \\enspace \\newline V = k_e ln \\frac{3R} {R} + k_e \\lambda \\pi + k_e ln3 \\newline \\enspace \\newline \\boxed{V = k_e \\lambda \\lparen \\pi + 2ln3 \\rparen} `,
                                    image:null
                                },
                                {
                                    index:3,
                                    is_step:true,
                                    title:'Nokta yüklü parçacığın elektrik alanını hesapla',
                                    extra_title:'Adım 3',
                                    description:`Nokta \\enspace yüklü \\enspace parçacığın \\newline elektrik \\enspace alanı : \\newline \\enspace \\newline dE = \\frac {k_{e}dq} {r^2} \\text{\\^{r}} \\newline \\enspace \\newline Tel \\enspace büküldüğünden \\enspace toplam \\enspace elektrik \\newline alanını \\enspace bulmak \\enspace için \\enspace parça \\newline parça \\enspace integre \\enspace etmemiz \\ gerek \\newline  \\enspace \\newline \\int_{-3R}^{-R} k_e \\frac {\\lambda dx} {x^2} \\text{\\^{r}} + \\int_{yrmdaire} k_e \\frac {\\lambda ds} {R^2} \\text{\\^{r}} +  \\int_{R}^{3R} k_e \\frac {\\lambda dx} {x^2} \\text{\\^{r}}  `,
                                    image:null
                                },
                                {
                                    index:4,
                                    is_step:true,
                                    title:'Elektrik Alanını hesapla',
                                    extra_title:'Adım 4',
                                    description:`Toplam \\enspace elektrik \\enspace alanı (E) \\newline \\enspace \\newline  k_e \\lambda x^{-1} |_{-3R}^{-R} + \\frac {k_e \\lambda \\pi R} {R^2} + k_e \\lambda x^{-1} |_{R}^{3R} \\newline \\enspace \\newline k_e \\pi \\lparen [(-R^{-1}) -R^{-1}] + \\frac { \\pi } {R} + [(3R))^{-1} - R^{-1}]  \\rparen \\newline \\enspace \\newline \\boxed{E = k_e \\lambda \\lparen \\frac {3 \\pi - 8} {3R} \\rparen \\text{\\^{r}} }`,
                                    image:null
                                },
                                {
                                    index:5,
                                    is_step:true,
                                    title:'Sonuç',
                                    extra_title:'Adım 5',
                                    description:`Toplam \\enspace elektrik \\enspace alanı (E) \\newline \\enspace \\newline \\boxed{E = k_e \\lambda \\lparen \\frac {3 \\pi - 8} {3R}  \\rparen \\text{\\^{r}} } \\newline \\enspace \\newline Toplam \\enspace potansiyel \\enspace elektrik  (V) \\newline \\enspace \\newline \\boxed{V = k_e \\lambda \\lparen \\pi + 2ln3 \\rparen}`,
                                    image:null
                                },
                            ]
                        }
                    ]
                },
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
