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
    selectLesson(lesson) {
        this.selectedLesson = lesson;
    }

    @action
    selectQuestion(qs) {
        this.selectedQuestion = qs;
    }

    @action
    selectStep(step) {
        this.selectedStep = step;
    }

    @action
    selectNextStep(step) {
        this.nextStep = step;
    }

    @action
    fetchItems(data) {
        this.items = [
            {
                title: "Elektrik ve Manyetizma",
                text: "Ders",
                categories: [
                    {
                        id: 1,
                        title: 'Ekstra Ödev',
                        questions: [
                            {
                                title: '1.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: 'Q, -2Q ve Q değerlerine sahip üç yük, koordinat sisteminin x ekseni üzerine aralarındaki mesafeler l olacak şekide yan yana yerleştirilmiştir \n a) -2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyelini hesaplayın \n b) P noktasındaki elektrik alan vektörünü hesaplayın. \n c) Elektrik potansiyelin y << l ve y -> sonsuz limitlerindeki ifadelerini bulun.',
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        is_step: true,
                                        title: '-2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyeli hesapla',
                                        extra_title: 'Adım 1',
                                        description: `\\text{Elektrik potansiyeli (V)} \\newline V = k_e \\frac {q} {r} \\newline \\enspace \\newline \\text{P noktasındaki V'yi hesaplamak} \\newline \\text{için  o noktaya etki eden} \\newline \\text{tüm noktaları hesaplamalıyız.} \\newline \\enspace \\newline \\boxed{V_p = V_1 + V_2 + V_3} `,
                                        image: null
                                    },
                                    {
                                        index: 2,
                                        is_step: true,
                                        title: '-2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyeli hesapla',
                                        extra_title: 'Adım 2',
                                        description: `\\boxed{V_p = V_1 + V_2 + V_3} \\newline \\enspace \\newline \\boxed{d = \\sqrt{L^2 + y^2}} \\enspace \\boxed{y = y} \\newline \\enspace \\newline V_1 = k \\frac {q}{ \\sqrt{L^2 + y^2} } \\newline \\enspace \\newline  V_2 = k \\frac {-2q}{ \\sqrt{y} } \\newline \\enspace \\newline V_3 = k \\frac {q}{ \\sqrt{L^2 + y^2} } \\newline \\enspace \\newline \\boxed{ a ) V_p = kq2 \\lparen \\frac {2} {\\sqrt{L^2 + y^2} } + \\frac {-1} {y} \\rparen } `,
                                        image: null
                                    },
                                    {
                                        index: 3,
                                        is_step: true,
                                        title: '-2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyeli hesapla',
                                        extra_title: 'Adım 3',
                                        description: `\\text{ P Noktasında Elektrik Alan Vektörü} \\newline \\enspace \\newline \\vec{E_p} =  \\vec{E_1} + \\vec{E_2} + \\vec{E_3} \\newline \\enspace \\newline E = k \\frac {|Q|} {r^2} (büyüklük) \\newline \\enspace \\newline E_1 = E_3 \\enspace  E_1 = k \\frac{q}{L^2 +r^2} \\newline  \\enspace \\newline E_2 = \\frac {2q} {L^2 + r^2}    `,
                                        image: null
                                    },
                                    {
                                        index: 4,
                                        is_step: true,
                                        title: '-2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyeli hesapla',
                                        extra_title: 'Adım 4',
                                        description: ` E_{1x} = k \\frac {q} {L^2 + y^2}cos45, \\enspace E_{2x} = 0 \\newline \\enspace \\newline E_{1x} = k \\frac {q} {L^2 + y^2}sin45, \\enspace E_{2x} = k \\frac {2q} {y}sin45 \\newline \\enspace \\newline E_{px} = E_{1x} + E_{2x} + E_{3x} \\newline \\enspace  \\newline E_{py} = E_{1y} + E_{2y} + E_{3y}   `,
                                        image: null
                                    },
                                    {
                                        index: 5,
                                        is_step: true,
                                        title: '-2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyeli hesapla',
                                        extra_title: 'Adım 5',
                                        description: `E_{px} = k q \\frac{ \\sqrt{2} } {2} \\lparen \\frac {2q} {L^2 + y^2} \\rparen \\newline \\enspace \\newline E_{py} = k q \\frac{ \\sqrt{2} } {2} \\lparen \\frac {2q} {L^2 + y^2} + \\frac{q} {y} \\rparen \\newline \\enspace \\newline \\boxed{ b) \\newline \\vec{E_p} =  k q \\frac{ \\sqrt{2} } {2} \\frac {2q} {L^2 + y^2}    \\vec{i} +  k q \\frac{ \\sqrt{2} } {2} \\lparen \\frac {2q} {L^2 + y^2} + \\frac{q} {y} \\rparen  \\vec{j} } `,
                                        image: null
                                    },
                                    {
                                        index: 6,
                                        is_step: true,
                                        title: '-2Q yükünden y kadar mesafedeki P noktasındaki elektrik potansiyeli hesapla',
                                        extra_title: 'Adım 6',
                                        description: `\\text{ c) Toplam yük 0 olduğundan} \\newline \\text{Elektrik potansiyelide 0 dır}` ,
                                        image: null
                                    },
                                ]
                            },
                            {
                                title: '2.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: 'Üç nokta yük (q1, q2 ve 125q) şeklinde gösterildiği gibi bir dikdörtgenin üç köşesine yerleştirilmiştir. Dikdörtgenin sol üst köşesindeki elektrik alan sıfırdır. \n a) q1 ve q2 yüklerini q cinsinden bulunuz. \n b) Sistemin elektrik potansiyel enerjisini bulun. \n c) Yükleri birbirinden sonsuz uzak olacak şekilde ayırmak için ne kadar iş yapmak gerekir?',
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: null
                                    },
                                    {
                                        index: 1,
                                        title: '',
                                        extra_title: 'Adım 1',
                                        is_step: true,
                                        description: `\\text{ Verilen şekilde görüldüğü üzere  } \\newline \\text{ 3 4 5 üçgeni olduğunu direk anlayabiliyoruz.} \\newline  \\enspace \\newline \\text{ Buradan köşegenler arası uzaklığın} \\newline \\text{ \\boxed{5L} olduğunu buluyoruz.} \\newline \\enspace \\newline \\text{ Sol üst köşede elektrik alanı} \\newline \\text{ \\boxed{0} olduğu verilmiş.} `,
                                        image: null
                                    },
                                    {
                                        index: 2,
                                        title: '',
                                        extra_title: 'Adım 2',
                                        is_step: true,
                                        description: `\\text{ \\boxed{q1 \\enspace  ve \\enspace q2} yi \\boxed{q} cinsinden bulmak için } \\newline \\text{elektrik alanın 0 olduğu noktaya etki eden} \\newline \\text{ yükleri orada hesaplayıp 125q yükünü  } \\newline \\text{ q1 ve q2 cinsinden yazalım aynısını potansiyel } \\newline \\text{ (V) içinde yapalım sonra bu iki denklemi } \\newline \\text{ birbirine eşitleyelim. }`,
                                        image: null
                                    },
                                    {
                                        index: 3,
                                        title: '',
                                        extra_title: 'Adım 3',
                                        is_step: true,
                                        description: `\\text{125q yükünü q3 yükü olarak tanımladık} \\newline \\enspace \\newline \\vec{E_{q_4}} = \\vec{E_{q_4 q_1}} + \\vec{E_{q_4 q_2}} +  \\vec{E_{q_4 q_3}} \\newline \\enspace \\newline  0 = \\vec{E_{q_4 q_1}} + \\vec{E_{q_4 q_2}} +  \\vec{E_{q_4 q_3}} \\newline \\enspace \\newline    -\\vec{E_{q_4 q_3}} = \\vec{E_{q_4 q_1}} + \\vec{E_{q_4 q_2}} \\newline \\enspace \\newline -k \\frac {q_4 q_3} {(5L)^2} =  k \\frac {q_4 q_1} {(4L)^2} + k \\frac {q_4 q_2} {(3L)^2} \\newline \\enspace \\newline -\\frac {125q} {(5L)^2} =  \\frac {q_1} {(4L)^2} + \\frac {q_2} {(3L)^2} \\newline \\enspace \\newline \\boxed{-5q =  \\frac {q_1} {16} + \\frac {q_2} {9} } `,
                                        image: null
                                    },
                                    {
                                        index: 4,
                                        title: '',
                                        extra_title: 'Adım 4',
                                        is_step: true,
                                        description: '-16*9*5q =  9 q_1+ 16 q_2 \\newline \\boxed{9 q_1 = b} \\enspace \\boxed{ 16 q_2 = c} \\newline \\enspace \\newline  \\boxed{-16*9*5q =  bq + cq }  \\newline \\enspace \\newline  \\text{-720q = bq + cq } \\newline a) \\enspace \\boxed{q_1=32q} \\enspace \\boxed{q_2=27q} ',
                                        image: null
                                    },
                                    {
                                        index: 5,
                                        title: '',
                                        extra_title: 'Adım 5',
                                        is_step: true,
                                        description: ` \\text{sorunun b ve c şıkkı aslında} \\newline \\enspace \\newline \\text{birbirleriyle ilişkili} \\newline \\text{ her bir yükü sonsuzdan  konumuna } \\newline \\text{getirmek için gereken kuvvetin sadece } \\newline \\text{tam tersi  kuvvet gerekiyor konumundan } \\newline \\text{sonsuza göndermeye gerekli olan iş için} \\newline \\text{şimdi sistemin potansiyel enerjisini} \\newline \\text{hesaplayalım.} `,
                                        image: null
                                    },
                                    {
                                        index: 6,
                                        title: '',
                                        extra_title: 'Adım 6',
                                        is_step: true,
                                        description: `U = k \\frac {qQ} {d} \\newline \\enspace \\newline \\text{toplam potansiyel enerjiyi hesaplamak } \\newline \\text{ için tüm iki nokta kombinasyonlarını } \\newline \\text{toplayalım} \\newline \\enspace \\newline U = U_{12} + U_{13} + U_{23} \\newline \\enspace \\newline U_{12} = k \\frac {q_1 q_2} {r_{12}} = k \\frac {847 a^2} {5L} \\newline \\enspace \\newline U_{13} = k \\frac {q_1 q_3} {r_{13}} = k \\frac {4000 a^2} {3L} \\newline \\enspace \\newline U_{23} = k \\frac {q_2 q_3} {r_{23}} = k \\frac {3375 q^2} {4L} \\newline \\enspace \\newline \\boxed{b)U = k \\frac {q^2 2346,4833} {L}} `,
                                        image: null
                                    },
                                    {
                                        index: 7,
                                        title: '',
                                        extra_title: 'Adım 7',
                                        is_step: true,
                                        description: `\\boxed{U = k \\frac {q^2 2346,4833} {L}} \\newline \\enspace \\newline \\boxed{W = - \\Delta U } \\newline \\enspace \\newline \\text{Formülü bize yapılan işi veriyor} \\newline \\enspace \\newline \\text{Parçaları sonsuzdan konumuna getirirken} \\newline \\text{aynı şekilde Sonsuza gönderirken} \\newline \\enspace \\newline \\boxed{c) \\text{ aynı kuvvet ters yönde yapmamız gerek.}} `,
                                        image: null
                                    }
                                ]
                            },
                            {
                                title: '3.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: 'R Yarıçaplı bir halka, merkezi orjinde olacak şekilde yz düzlemine yerleşitirilmiştir. Halkanın düzgün doğrusal yük yoğunluğu lambda dır. \n a) Halkanın merkezinden x kadar uzaktaki P noktasında elektrik potansiyeli V yi hesaplayınız. \n b) Halkanın merkezinden x kadar uzaktaki P Noktasındaki Elektrik alan vektörünü hesaplayınız.',
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: null
                                    },
                                    {
                                        index: 1,
                                        is_step: true,
                                        title: 'Halkanın merkezinden x kadar uzaktaki P noktasındaki elektrik Potansiyelini hesapla',
                                        extra_title: 'Adım 1',
                                        description: `\\text{Halkanın merkezinden x} \\newline \\text{uzaklıkta bir P noktamız var.}  \\newline \\text{ Halkadan rastegele dq noktası seçelim.  } \\newline \\text{ Bu dq yük elemanının  P noktasına   } \\newline \\text{ uzaklığını üçgen yardımıyla} \\newline \\sqrt{x^2 + r^2} \\text{ olduğunu buluruz.}`,
                                        image: null
                                    },
                                    {
                                        index: 2,
                                        is_step: true,
                                        title: 'Halkanın merkezinden x kadar uzaktaki P noktasındaki elektrik Potansiyelini hesapla',
                                        extra_title: 'Adım 2',
                                        description: `\\text{Elektrik Potasiyeli (V)} \\newline  \\enspace \\newline \\boxed{ V = \\intop k \\frac {dq} {r}} \\newline \\enspace \\newline \\text{Böylece elektrik potansiyelini} \\newline \\enspace \\newline  \\boxed{ V = \\intop k \\frac {dq} { \\sqrt{x^2 + r^2}}} \\newline \\enspace \\newline \\text{şeklinde ifade edebiliriz.} `,
                                        image: null
                                    },
                                    {
                                        index: 3,
                                        is_step: true,
                                        title: 'Halkanın merkezinden x kadar uzaktaki P noktasındaki elektrik Potansiyelini hesapla',
                                        extra_title: 'Adım 3',
                                        description: `\\text{k bir sabit ve r degerimizde } \\newline \\text {  P noktasından aynı uzaklıktadır.  } \\newline \\text {  Bu yüzden intergralin dışına alabiliriz  } \\newline \\text { ve bu ifade şuna dönüşür } \\newline \\enspace \\newline V = \\frac {k} {\\sqrt{x^2 + r^2}} \\intop dq \\newline \\enspace \\newline \\boxed{ a) V = \\frac {kQ} { \\sqrt{x^2 + r^2}}}`,
                                        image: null
                                    },
                                    {
                                        index: 4,
                                        is_step: true,
                                        title: 'Halkanın merkezinden x kadar uzaktaki P noktasındaki elektrik Alanını hesapla',
                                        extra_title: 'Adım 4',
                                        description: `\\text{Elektrik Alanının elektrik potansiyelinden  } \\newline \\text {  türetilebilindiğini biliyoruz.  } \\newline -dV = \\vec{E} \\newline \\enspace \\newline -dV = E_{dx} dx + E_y dy + E_z dz \\newline \\enspace \\newline E_x = - \\frac {dV} {dx}, \\enspace E_y = - \\frac {dV} {dy}, \\enspace E_z = - \\frac {dV} {dz} `,
                                        image: null
                                    },
                                    {
                                        index: 5,
                                        is_step: true,
                                        title: 'Halkanın merkezinden x kadar uzaktaki P noktasındaki elektrik Alanını hesapla',
                                        extra_title: 'Adım 5',
                                        description: `\\text {  Bu yüzden Elektrik Alan vektörünü  } \\newline \\text { şu şekilde yazabiliriz. } \\newline \\enspace \\newline \\vec{E} = - \\lparen \\vec{i} \\frac {dV} {dx} + \\vec{j} \\frac {dV} {dy} + \\vec{k} \\frac {dV} {dz} \\rparen \\newline \\enspace \\newline \\boxed{ \\vec{E} = - \\Delta \\vec{V} }`,
                                        image: null
                                    },
                                    {
                                        index: 6,
                                        is_step: true,
                                        title: 'Halkanın merkezinden x kadar uzaktaki P noktasındaki elektrik Alanını hesapla',
                                        extra_title: 'Adım 6',
                                        description: `\\text{Bize verilen şeklin} \\newline \\text{simetrisinden sadece x bileşeni} \\newline \\text{olduğunu görüyoruz O halde } \\newline \\enspace \\newline E_x = - \\frac{dV} {dx} = -kQ \\frac {d} {dx} (x^2 + r^2)^{-1/2} \\newline \\enspace \\newline = kQ(- \\frac{1} {2} (x^2 + r^2)^{3/2} (2x)) \\newline \\enspace \\newline \\boxed{ b) \\vec{E} = \\frac {kQx} {(x^2 + r^2)^{3/2}} \\vec{i}} `,
                                        image: null
                                    },
                                    {
                                        index: 7,
                                        is_step: true,
                                        title: 'Halkanın merkezinden x kadar uzaktaki P noktasındaki elektrik Alanını hesapla',
                                        extra_title: 'Sonuç',
                                        description: `\\text{Elektrik Potansiyeli (V)} \\newline  \\enspace \\newline \\boxed{ V = \\frac {kQ} { \\sqrt{x^2 + r^2}}} \\newline \\enspace \\newline \\text{ Elektrik Alan Vektorü} \\newline \\enspace \\newline \\boxed{ \\vec{E} = \\frac {kQx} {(x^2 + r^2)^{3/2}} \\vec{i}}   `,
                                        image: null
                                    },
                                ]
                            },
                            {
                                title: '4.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: 'Düzgün Yüzeysel yük yoğunluna sahip iç yarı çapı R1 ve yapıçapı R2 olan yassı bir dis şekildeki gibi x eksenine dik olarak yerleştirilmiştir. Diskin merkezinden d kadar sağda, x ekseni üzezrindeki P noktasında elektrik potansiyelini (V) bulunuz. (Sonsuzdaki potansiyeli sıfır alınız.)(İpucu: qdüzgün yüklü, r yarıçaplı halka için P noktasındaki V = kq/kökiçi(d^2+r^2))',
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        is_step: true,
                                        title: 'Nokta yüklü parçacığın elektrik potansiyelini hesapla',
                                        extra_title: 'Adım 1',
                                        description: `Nokta \\enspace yüklü \\enspace parçacığın \\newline elektrik \\enspace potansiyeli : \\newline \\enspace \\newline dV = \\frac {k_{e}dq} {\\sqrt{\\smash[b]{ r^{2} + d^{2} }}}`,
                                        image: null
                                    },
                                    {
                                        index: 2,
                                        is_step: true,
                                        title: 'dQ yu hesapla',
                                        extra_title: 'Adım 2',
                                        description: `dq yu \\enspace hesaplayalım \\newline \\enspace \\newline dq = \\rho dA \\newline \\boxed{dq = \\rho 2 \\pi rdr}  \\newline \\enspace \\newline artık \\newline elektrik \\enspace potansiyelini \\newline hesaplayabiliriz \\enspace   `,
                                        image: null
                                    },
                                    {
                                        index: 3,
                                        is_step: true,
                                        title: 'Elektrik Potansiyelini hesapla',
                                        extra_title: 'Adım 3',
                                        description: `V = \\int_{R_1}^{R_2} 2 \\pi \\rho k_{e} \\frac {rdr} {\\sqrt{r^2 + d^2}} \\newline \\enspace \\newline \\boxed{2 \\pi \\rho k_{e}} \\enspace sabit \\enspace olduğundan \\newline integralin \\enspace dışına \\enspace alalım \\newline \\enspace \\newline  V = 2 \\pi \\rho k_{e} \\int_{R_1}^{R_2}  \\frac {rdr} {\\sqrt{r^2 + d^2}}  `,
                                        image: null
                                    },
                                    {
                                        index: 4,
                                        is_step: true,
                                        title: 'Sonuç',
                                        extra_title: 'Adım 4',
                                        description: `Elektrik Potansiyeli (V) \\newline \\enspace \\newline \\boxed{ \\pi \\rho k_{e} \\lparen\\sqrt{d^2 + {R_{2}}^{2}} - \\sqrt{d^2 + {R_{1}}^2} \\rparen}`,
                                        image: null
                                    },

                                ]
                            },
                            {
                                title: '5.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: 'Çizgisel yük yoğunluğu lambda olan bir tel şekilde gibi bükülmüştür. \n a) O noktasındaki elektrik potansiyelini bulunuz. \n b) O noktasındaki elektrik alan vektörünü bulunuz.',
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        is_step: true,
                                        title: 'Nokta yüklü parçacığın elektrik potansiyelini hesapla',
                                        extra_title: 'Adım 1',
                                        description: `Nokta \\enspace yüklü \\enspace parçacığın \\newline elektrik \\enspace potansiyeli : \\newline \\enspace \\newline dV = \\frac {k_{e}dq} {r} \\newline \\enspace \\newline Tel \\enspace büküldüğünden \\enspace toplam \\enspace elektrik \\newline potansiyelini \\enspace bulmak \\enspace için \\enspace parça \\newline parça \\enspace integre \\enspace etmemiz \\ gerek \\newline  \\enspace \\newline \\int_{-3R}^{-R} k_e \\frac {\\lambda dx} {-x} + \\int_{yrmdaire} k_e \\frac {\\lambda ds} {R} +  \\int_{R}^{3R} k_e \\frac {\\lambda dx} {x} `,
                                        image: null
                                    },
                                    {
                                        index: 2,
                                        is_step: true,
                                        title: 'Elektrik Potansiyelini hesapla',
                                        extra_title: 'Adım 2',
                                        description: `Toplam \\enspace elektrik \\enspace potansiyeli (V) \\newline  \\newline \\enspace \\newline (bir \\enspace önceki \\enspace integral \\enspace sonucu)  \\newline {-k_{e} \\lambda ln(-x) |_{-3R}^{-R} + k_{e} \\frac {\\lambda \\pi R} {R} + k_e \\lambda lnx|_{R}^{3R}} \\newline \\enspace \\newline V = k_e ln \\frac{3R} {R} + k_e \\lambda \\pi + k_e ln3 \\newline \\enspace \\newline \\boxed{a) V = k_e \\lambda \\lparen \\pi + 2ln3 \\rparen} `,
                                        image: null
                                    },
                                    {
                                        index: 3,
                                        is_step: true,
                                        title: 'Nokta yüklü parçacığın elektrik alanını hesapla',
                                        extra_title: 'Adım 3',
                                        description: `Nokta \\enspace yüklü \\enspace parçacığın \\newline elektrik \\enspace alanı : \\newline \\enspace \\newline dE = \\frac {k_{e}dq} {r^2} \\text{\\^{r}} \\newline \\enspace \\newline Tel \\enspace büküldüğünden \\enspace toplam \\enspace elektrik \\newline alanını \\enspace bulmak \\enspace için \\enspace parça \\newline parça \\enspace integre \\enspace etmemiz \\ gerek \\newline  \\enspace \\newline \\int_{-3R}^{-R} k_e \\frac {\\lambda dx} {x^2} \\text{\\^{r}} + \\int_{yrmdaire} k_e \\frac {\\lambda ds} {R^2} \\text{\\^{r}} +  \\int_{R}^{3R} k_e \\frac {\\lambda dx} {x^2} \\text{\\^{r}}  `,
                                        image: null
                                    },
                                    {
                                        index: 4,
                                        is_step: true,
                                        title: 'Elektrik Alanını hesapla',
                                        extra_title: 'Adım 4',
                                        description: `Toplam \\enspace elektrik \\enspace alanı (E) \\newline \\enspace \\newline  k_e \\lambda x^{-1} |_{-3R}^{-R} + \\frac {k_e \\lambda \\pi R} {R^2} + k_e \\lambda x^{-1} |_{R}^{3R} \\newline \\enspace \\newline k_e \\pi \\lparen [(-R^{-1}) -R^{-1}] + \\frac { \\pi } {R} + [(3R))^{-1} - R^{-1}]  \\rparen \\newline \\enspace \\newline \\boxed{b) E = k_e \\lambda \\lparen \\frac {3 \\pi - 8} {3R} \\rparen \\text{\\^{r}} }`,
                                        image: null
                                    },
                                    {
                                        index: 5,
                                        is_step: true,
                                        title: 'Sonuç',
                                        extra_title: 'Adım 5',
                                        description: `Toplam \\enspace elektrik \\enspace alanı (E) \\newline \\enspace \\newline \\boxed{E = k_e \\lambda \\lparen \\frac {3 \\pi - 8} {3R}  \\rparen \\text{\\^{r}} } \\newline \\enspace \\newline Toplam \\enspace potansiyel \\enspace elektrik  (V) \\newline \\enspace \\newline \\boxed{V = k_e \\lambda \\lparen \\pi + 2ln3 \\rparen}`,
                                        image: null
                                    },
                                ]
                            },
                            {
                                title: '6.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: `2L boyutunda pozitif yük dağılımlı ve çizgisel yük yogunlugu lambda = C|y| olan bir çubuk ele alalım. Burada C Sabittir. \n a= P noktasındaki elektrik potansiyelini(V) bulun. P noktası çubuğun ortasında olan 0 noktasından x kadar uzaklıpındadır.(V'yi sonsuzda 0 alın.) \n b) P noktastındaki elektrik alan vektörünü bulun.`,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: 'Adım 1',
                                        is_step: true,
                                        description:`\\lambda = C|y| \\newline \\enspace \\newline dq = \\lambda dl \\newline \\enspace \\newline dq = C|y|dy \\newline \\enspace \\newline r = \\sqrt{y^2 + x^2} \\newline \\enspace \\newline V = \\intop dV \\newline \\enspace \\newline dV = k \\frac {dq} {r} \\newline \\enspace \\newline \\text{Buradan sonra integrali} \\newline \\text{-L'den 0, 0'dan L ye  } \\newline \\text{integral alacağız.}`,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: 'Adım 2',
                                        is_step: true,
                                        description:`V = \\int_{-L}^{0} k \\frac {dq} {r} + \\int_{0}^{L} k \\frac {dq} {r} \\newline \\enspace \\newline \\text{C ve k sabit integral dışına} \\newline \\enspace \\newline V = kC \\lparen \\int_{-L}^{0} \\frac {-ydy}{\\sqrt{x^2 + y^2}} + \\int_{0}^{L} \\frac {ydy} {\\sqrt{x^2 + y^2}} \\rparen \\newline \\enspace \\newline V = kC \\lparen \\sqrt{x^2 + L^2} - \\sqrt{x^2} - \\sqrt{x^2} + \\sqrt{x^2 + L^2}   \\rparen \\newline \\enspace \\newline \\boxed{ a) V = kC 2( \\sqrt{x^2 + L^2}-x )}`,
                                        image:null
                                    },
                                    {
                                        index: 3,
                                        title:``,
                                        extra_title: 'Adım 3',
                                        is_step: true,
                                        description:` \\vec{E} =\\intop dE  \\newline \\enspace \\newline \\vec{dE} = k \\frac {C|y|dy} { x^2+ y^2 } \\vec{r} \\newline \\enspace \\newline  E_x = \\intop dEcos \\theta \\newline \\enspace \\newline E_y = \\intop dEsin \\theta = 0  \\newline \\enspace \\newline \\text{(y bileşeni simetriden 0 çıkar)} \\newline \\enspace \\newline  E_x = \\intop d E_x`,
                                        image:null
                                    },
                                    {
                                        index: 4,
                                        title:``,
                                        extra_title: 'Adım 4',
                                        is_step: true,
                                        description:`dE_x = k \\frac {xC|y|dy} {(x^2 + y^2)^{3/2}} \\newline \\enspace \\newline E_x = \\int_{-L}^{L}  k \\frac {xC|y|dy} {(x^2 + y^2)^{3/2}} \\newline \\enspace \\newline  E_x = 2kxC \\int_{0}^{L} \\frac {ydy} { \\sqrt{x^2 + y^2}^{3/2}} \\newline \\enspace \\newline E_x = 2kC \\lparen 1 - \\frac {x} {\\sqrt{x^2 + L^2} } \\rparen \\newline \\enspace \\newline \\boxed{b) \\vec{E} = 2kC \\lparen 1 - \\frac {x} {\\sqrt{x^2 + L^2} } \\rparen \\vec{i}}  `,
                                        image:null
                                    },
                                ]
                            },
                            {
                                title: '7.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: `Üç Boyutlu bir uzayda elektrik alan aşağıdaki gibi verilmiştir: \n E = 2xi + (y +2)j + 2k \n Buna göre, \n a)x-z düzleminde bulunan uzunluğu L, genişliği W olan diktörtgenden geçen elektrik akısını bulunuz. \n b)x-y düzleminde bulunan ve yarıçapı R olan bir çemberden geçen elektrik akısını bulunuz \n c) y-z düzleminde bulunan L,genişliği W olan bir dikdörtgenden geçen elektrik akısını bulunuz.(Dikdörtgen koordinat sisteminin merkezine en yakın köşesi y=a, z=c noktasındadır.)`,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: 'a ) Adım 1',
                                        is_step: true,
                                        description: `\\vec{E} = 2xi + (y+2) + 2k \\newline \\enspace \\newline \\vec{dA} = j dxdy \\newline \\enspace \\newline \\int_{0}^{W} \\int_{0}^{L} (y+2)dxdz \\newline \\enspace \\newline \\int_{0}^{L} (y+2)dx =L(y+z) \\newline \\enspace \\newline \\int_{0}^{W}L(y+2)dz = WL(y+2) \\newline \\enspace \\newline y=0 \\newline \\enspace \\newline \\boxed{ a)\\phi = 2LW}  `,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: 'b ) Adım 1',
                                        is_step: true,
                                        description: `\\vec{E} = 2xi + (y+2) + 2k \\newline \\enspace \\newline \\vec{dA} = krdrd \\theta \\newline \\enspace \\newline  2 \\int_{0}^{2 \\pi } \\int_{0}^{R} rdrd \\theta \\newline \\enspace \\newline \\int_{0}^{R} rdr = \\frac {R^2} {2} \\newline \\enspace \\newline 2\\int_{0}^{2 \\pi } \\frac {r^2} {2} d \\theta \\newline \\enspace \\newline \\boxed{ b)\\phi = 2 \\pi r^2 }  `,
                                        image:null
                                    },
                                    {
                                        index: 3,
                                        title:``,
                                        extra_title: 'c ) Adım 1',
                                        is_step: true,
                                        description: `\\vec{E} = 2xi + (y+2) + 2k \\newline \\enspace \\newline \\vec{dA} = i dydz \\newline \\enspace \\newline \\int_{a}^{a+L} \\int_{c}^{c+W} 2x dydz \\newline \\enspace \\newline \\int_{c}^{c+W} 2xdy = 2xW \\newline \\enspace \\newline \\int_{a}^{a+L} 2xWdz  = 2xWL \\newline \\enspace \\newline x=0 \\newline \\enspace \\newline \\boxed{ c) \\phi = 0 }   `,
                                        image:null
                                    },
                                ]
                            },
                            {
                                title: '8.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: `Hacimsel yük yoğunluğu rho(p) olan düzgün yüklü kürenin yarıçapı R'dir \n a) Kürenin merkezinden r kadar uzakta elektrik alanın bütüklüğünü r > R için hesaplayın. \n b)Kürenin merkezinden r kadar uzakta elektrik alanın büyüklüğünü r < R için hesaplayın. \n c= Kürenin merkezinden r kadar uzakta elektrik potansiyeli r > R için hesaplayın. \n d)Kürenin merkezinden r kadar uzakta elektrik potansieyli r < R için hesaplayın \n e) Kürenin elektriksel potansiyel enerjisini hesaplayın.`,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: 'a ) Adım 1',
                                        is_step: true,
                                        description:`\\vec{E} = \\intop \\vec{dE} \\newline \\enspace \\newline \\oint \\vec{E} \\cdot \\vec{dA} = \\frac {Q_{iç}} {E_0} \\newline \\enspace \\newline EA = \\frac {Q_{iç}} {E_0} \\enspace  \\boxed{dq = \\rho dV } \\newline \\enspace \\newline  Q_{iç} = \\int_{0}^{a} dQ  = \\rho 4 \\pi \\int_{0}^{a} r^2 dr  = 4 \\rho \\pi \\frac {a^3} {3} \\newline \\enspace \\newline E (4 \\pi a^2) = 4 \\rho \\pi \\frac {a^3} {3 E_0} \\newline \\enspace \\newline \\boxed{\\text{r=a < R}} \\newline \\enspace \\newline E_{iç} = \\rho \\frac {a} {3 E_0} \\newline \\enspace \\newline \\boxed{a) \\vec{E_{iç}} = \\rho \\frac {a} {3 E_0} \\vec{r}}    `,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: 'b ) Adım 1',
                                        description:`\\vec{E} = \\intop \\vec{dE} \\newline \\enspace \\newline \\oint \\vec{E} \\cdot \\vec{dA} = \\frac {Q_{iç}} {E_0} \\newline \\enspace \\newline EA = \\frac {Q_{iç}} {E_0} \\enspace  \\boxed{dq = \\rho dV } \\newline \\enspace \\newline  Q_{iç} = \\int_{0}^{R} dQ  = \\rho 4 \\pi \\int_{0}^{R} r^2 dr  = 4 \\rho \\pi \\frac {R^3} {3} \\newline \\enspace \\newline E (4 \\pi a^2) = 4 \\rho \\pi \\frac {R^3} {3 E_0} \\newline \\enspace \\newline \\boxed{\\text{r=a > R}} \\newline \\enspace \\newline E_{dış} = \\rho \\frac {R^3} { a^2 3 E_0} \\newline \\enspace \\newline \\boxed{b) \\vec{E_{dış}} = \\rho \\frac {R^3} {3 a^2 E_0 } \\vec{r}}    `,
                                        is_step: true,
                                        image:null
                                    },
                                    {
                                        index: 3,
                                        title:``,
                                        extra_title: 'Bilgi',
                                        description: ` \\text { İki nokta arası Elektrik Potansiyeli Farkı } \\newline \\enspace \\newline V_b - V_a = - \\int_{a}^{b} \\vec{E} \\cdot \\vec{dl} \\newline \\enspace \\newline  \\text{ Kürenin içinde ve dışında} \\newline \\text{elektrik alanları farklı} \\newline \\text{o yüzden 2 farklı integral alacağız} \\newline V_{sonsuz} = 0 \\text{  olduğunu biliyoruz } \\newline \\enspace \\newline V_r - V_{sonsuz} = V_r = - \\int_{sonsuz}^{r} \\vec{E} \\cdot \\vec{dl}`,
                                        is_step: true,
                                        image:null
                                    },
                                    {
                                        index: 4,
                                        title:``,
                                        extra_title: 'c ) Adım 1',
                                        description: `\\boxed{V_r = - \\int_{sonsuz}^{r} \\vec{E} \\cdot \\vec{dl}} \\newline \\enspace \\newline V_r = - \\int_{sonsuz}^{R} \\vec{E_{dış} \\cdot \\vec{dl}} \\newline \\enspace \\newline V_r = - \\int_{sonsuz}^{r} \\frac{Q} {4 \\pi E_0 r^2 }dr  \\newline \\enspace \\newline V_r = - \\frac {Q}  {4 \\pi E_0}(- \\frac{1} {r} |_{sonsuz}^{r}) \\newline \\enspace \\newline \\boxed{r > R} \\newline \\enspace \\newline \\boxed{c) V_r = \\frac {Q} {4 \\pi E_0 r}} `,
                                        is_step: true,
                                        image:null
                                    },
                                    {
                                        index: 5,
                                        title:``,
                                        extra_title: 'd ) Adım 1',
                                        description: `\\boxed{V_r = - \\int_{sonsuz}^{r} \\vec{E} \\cdot \\vec{dl}} \\newline \\enspace \\newline V_r = - \\int_{sonsuz}^{R} \\vec{E_{dış} \\cdot \\vec{dl}} - \\int_{R}^{r} \\vec{E_{iç}} \\cdot \\vec{dl} \\newline \\enspace \\newline V_r = - \\int_{sonsuz}^{R} \\frac{Q} {4 \\pi E_0 r^2 }dr - \\int_{R}^{r} \\frac{Qr} {4 \\pi E_0 R^3}dr \\newline \\enspace \\newline V_r = - \\frac {Q}  {4 \\pi E_0}(- \\frac{1} {r} |_{sonsuz}^{R}) - \\frac {Q} {4 \\pi E_0 R^3 } \\frac{r^2} {2} |_{R}^{r} \\newline \\enspace \\newline V_r = \\frac {Q} {4 \\pi E_0 R} - \\frac{Q} {4 \\pi E_0 R^3}( \\frac {r^2} {2} - \\frac {R^2} {2})   `,
                                        is_step: true,
                                        image:null
                                    },
                                    {
                                        index: 5,
                                        title:``,
                                        extra_title: 'd ) Adım 2',
                                        description: `V_r = \\frac {Q} {4 \\pi E_0 R} - \\frac{Q} {4 \\pi E_0 R^3}( \\frac {r^2} {2} - \\frac {R^2} {2}) \\newline \\enspace \\newline V_r = \\frac {Q} {4 \\pi E_0} ( \\frac {1} {R} - \\frac {r^2} {2R^2} + \\frac {1} { 2R}) \\newline \\enspace \\newline \\boxed{ r < R} \\newline \\enspace \\newline  \\boxed{d) V_r = \\frac {Q} {8 \\pi E_0} ( \\frac {3} {R} - \\frac {r^2} {R^3})}  `,
                                        is_step: true,
                                        image:null
                                    },
                                    {
                                        index: 6,
                                        title:``,
                                        extra_title: 'e ) Adım 1',
                                        description: `W = \\frac {1} {2} \\int \\rho V d \\tau \\newline \\enspace \\newline d \\tau = 4 \\pi r^2 dr \\enspace \\enspace V = \\frac {Q} {8 \\pi E_0} ( \\frac {3} {R} - \\frac {r^2} {R^3}) \\newline \\enspace \\newline \\rho = \\frac {Q}{\\frac {4}{3} \\pi R^3} \\newline \\enspace \\newline W = \\frac {3Q^2} {16 \\pi^2 R^3 E_0} \\int_{0}^{R} \\frac {3r^2} {R} - \\frac {r^4} {R^3}dr \\newline \\enspace \\newline \\boxed{e) W = \\frac {1} {R} \\frac {3 Q^2 } {16 \\pi^2 E_0 }} `,
                                        is_step: true,
                                        image:null
                                    },
                                ]
                            },
                            {
                                title: '10.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: ``,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `R0 yarıçaplı, çok uzun l boyuna sahip ( R << l ) iletken olmayan bir silindir düzgün hacimsel yük yoğunluğuna (rho)'ya (C/m^3) shiptir. Cevaplarınızı verilen nicelikler ve E0 cinsinden ifade edin. \n a) Sislindirin dışında (R > R0) elektrik alanı bulun. Silindirin içinde (R < R0) elektrik alanı bulun. (Elektrik alanı bulduğunuz noktaların kenarlarından uzakta ve R << l olduğunu varsayın.) \n b)xy düzlemindeki A (yaklaşık) (2R0, 0) ve B (yaklaşık) (3R0, 0) noktaları arasındaki potansiyel farkını bulun.(y ekseni şekilde gösterildiği gibi silindir ekseninden geçmektedir.) \n c) yükü q = -e olan elektronu A (yaklaşık) (2R0, 0) noktasından C (yaklaşık) (3R0, R0)noktasına hareket ettirmek için gereken işi bulun.`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: ' a) Adım 1',
                                        is_step: true,
                                        description: ` \\varPhi =  \\oint \\vec{E} \\cdot \\vec{dA} = \\frac {Q_{iç}} {E_0} \\newline \\enspace \\newline R > R_0 için \\newline \\enspace \\newline \\text{Cismin dışında bir gauss silidiri şeçelim.} \\newline \\text{h( yüksekliğinde)} \\newline \\text{Elektrik alanı her yerde sabit} \\newline \\enspace \\newline \\varPhi_{taban} = \\intop E dA cos90 = 0 \\newline \\enspace \\newline \\varPhi = \\intop E dA cos0 = E A_{yam}= Eh2 \\pi R  \\newline \\enspace \\newline Q_{iç} = \\rho \\pi R_0^2 h \\newline \\enspace \\newline E 2h \\pi R = \\frac { \\rho \\pi R_0^2h} {E_0} \\newline \\enspace \\newline \\boxed{E = \\frac { \\rho R_0^2 } {2E_0 R}} `,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: ' a) Adım 2',
                                        is_step: true,
                                        description: ` \\varPhi =  \\oint \\vec{E} \\cdot \\vec{dA} = \\frac {Q_{iç}} {E_0} \\newline \\enspace \\newline R < R_0 için \\newline \\enspace \\newline \\text{Cismin içinde bir gauss silidiri şeçelim.} \\newline \\text{h( yüksekliğinde)} \\newline \\text{Elektrik alanı her yerde sabit} \\newline \\enspace \\newline \\varPhi_{taban} = \\intop E dA cos90 = 0 \\newline \\enspace \\newline \\varPhi = \\intop E dA cos0 = E A_{yam}= Eh2 \\pi R  \\newline \\enspace \\newline Q_{iç} = \\rho \\pi R^2 h \\newline \\enspace \\newline E 2h \\pi r = \\frac { \\rho \\pi R^2h} {E_0} \\newline \\enspace \\newline \\boxed{a) E = \\frac { \\rho R } {2E_0}} `,
                                        image:null
                                    },
                                    {
                                        index: 3,
                                        title:``,
                                        extra_title: ' b) Adım 1',
                                        is_step: true,
                                        description: ` V_B - V_A = \\intop \\vec{E} \\cdot \\vec{dl}  \\newline \\enspace \\newline \\text{Sadece x ekseninde hareket olduğu} \\newline \\text{y ve z eksenlerini hesaplamamıza gerek yok} \\newline \\enspace \\newline V  = \\frac{\\rho R_0^2 } {2 E_0 R} \\intop \\vec{-dl} = \\frac{\\rho R_0^2 } {2 E_0 R}  x \\newline \\enspace \\newline V_B - V_A = \\int_{3 R_0 }^{2 R_0 } \\frac{\\rho R_0^2 } {2 E_0 R}  dx \\newline \\enspace \\newline  \\boxed{b) V_B - V_A = -R_0 \\frac{Rρ}{2E_0}}  `,
                                        image:null
                                    },
                                    {
                                        index: 4,
                                        title:``,
                                        extra_title: ' c) Adım 1',
                                        is_step: true,
                                        description: `-e \\enspace yükünü \\enspace (2 R_0 , 0) -> (3 R_0 , R_0) \\enspace taşıyalım \\newline \\enspace \\newline (V_A - V_{sonsuz}) - (V_C - V_{sonsuz}) = W_{CA}  \\newline \\enspace \\newline V_A - V_C = W_{CA} \\newline \\enspace \\newline V = k \\frac {q} {r} \\newline \\enspace \\newline k \\frac {-e} {2 \\sqrt{R_0}} - k \\frac {-e} {3 R_0} \\newline \\enspace \\newline \\boxed{c) W = k \\frac{e(3 \\sqrt{R_0} + 1 )} {6 R_0} }  `,
                                        image:null
                                    },
                                ]
                            },
                            {
                                title: '11.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: `Şekilde bir 12V pil ve sığaları C1 = 4 uF, C2 = 6 uF, C3 = 3uF olan yüksüz kondansatör gösterilmiştir. Anahtar önce 1. kondansatör tamamen dolana kadar sol konuma getirilir. Ardından anahtar sağ konuma getirilir. \n a) 1. Kondansatör \n b) 2.Kondansatör \n c) 3. Kondansatör deki son yükleri bulun.`,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: ' Adım 1',
                                        is_step: true,
                                        description: `\\text{Kondansatör tamamen dolana kadar yükler} \\newline C_1 \\enspace  \\text{Kondansatörü ve pil} \\newline \\text{ arasında sürekli etkileşir.} \\newline \\text{Kondansatör dolduğu andan itibaren} \\newline \\text{Anahtar sağ konuma gelir} \\newline \\text{Burda } C_1 \\text{üzerindeki tüm yük } \\newline C_1 \\enspace C_2 \\enspace ve \\enspace C_3 \\text{  arasında paylaşılır } \\newline \\text{ilk durumdaki toplam yükü hesaplayalım} \\newline \\enspace \\newline Q_{net} = Q_1 = C_1 V_0 = 4 \\mu F 12V = 48 \\mu C \\newline \\enspace \\newline \\text{anahtar sağ tarafa geldigindeki} \\newline \\text{ durumlarıda küçük q ile gösterelim.} \\newline \\enspace \\newline Q_{net} = q_1 + q_{23} \\newline \\enspace \\newline C_1 V_1 + C_2 V_1 = C_1 V_0 \\newline \\enspace \\newline V_1 = \\frac {C_1} {C_1 + C_2} V_0  `,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: ' Adım 2',
                                        is_step: true,
                                        description: `V_1 = \\frac {C_1} {C_1 + C_2} V_0 \\newline \\enspace \\newline V_1 = \\frac {4 \\mu F} {6 \\mu F} 12V = 8V \\newline \\enspace \\newline q_1 = C_1 V_1 = 4 \\mu F = 32 \\mu C \\newline \\enspace \\newline q_{23} = C_{23} V_1 = 2 \\mu F 8V = 16 \\mu C \\newline \\enspace \\newline \\text{Seri bağlanan kondansatörler} \\newline \\text{aynı miktarda yüke sahiptir.} \\newline \\enspace \\newline  q_{23} = q_2 = q_3 = 16 \\mu C  \\newline \\enspace \\newline V_{c_2} = \\frac { q_{ 23 } } {6 \\mu F} = 16/6 V \\newline \\enspace \\newline V_{c_3} = \\frac { q_{23}} {3 \\mu F} = 16/3 V  `,
                                        image:null
                                    },
                                    
                                ]
                            },
                            {
                                title: '12.Problem(Eksik)',
                                steps: [
                                    {
                                        index: 0,
                                        title: `Paralel plakalı bir kondansatörün plaka alanı A, plakalar arasındaki mesafe d olup kondansatör emk'sı V0 olan bir emk kaynağına bağlanmıştır. Plakalar arasındaki boşluğun bir kısmı K dielektrik sabitine sahip su ile doludur. \n a) Kondansatör sığasını su seviyesi x cinsinden bulun.. \n b) Suyun içindeki elektrik alanı E1 'in büyüklüğünü bulunuz.`,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: ' a) Adım 1',
                                        is_step: true,
                                        description: ` \\text{Paralel plakalı kondasatör sığası nın} \\newline \\enspace \\newline   C = E_0 \\frac {A} {d}  \\newline \\enspace \\newline \\text{ olduğunu biliyoruz.} \\newline \\text{ Dielektrik madde var ise k sabiti ile çarpacağız.} \\newline \\enspace \\newline C = k E_0 \\frac {A} {d}  \\newline \\enspace \\newline \\text{Şimdi kondansatörleri seri olucak şekilde} \\newline \\text{ iki tane paralel plakalı } \\newline \\text{kondansatör gibi düşünelim.}  `,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: ' a) Adım 2',
                                        is_step: true,
                                        description: `\\text{Bir kondansatör dilelektrik sabitli} \\newline \\text{ su ile dolu olsun.} \\newline \\enspace \\newline C_1 = k_{su} E_0 \\frac {A}{x} \\newline \\enspace \\newline \\text{  bir diğeride içi boş olsun } \\newline \\enspace \\newline C_2 = E_0 \\frac{A} {d-x} \\newline \\enspace \\newline \\text{Seri olarak bağladığımız için} \\newline \\enspace \\newline  \\frac {1} {C_{eş}} = \\frac {1} {C_1} + \\frac{1} {C_2} \\newline \\enspace \\newline \\frac {1} {C_{eş}} = \\frac {x + k_{su}(d-x) } {k_{su} E_0 A} \\newline \\enspace \\newline \\boxed{ a)C_{eş} = \\frac { k_{su} E_0 A} {x + k_{su} (d-x) }} `,
                                        image:null
                                    },
                                    {
                                        index: 3,
                                        title:``,
                                        extra_title: ' b) Adım 1',
                                        is_step: true,
                                        description: `E_{su} = \\frac { Q_{su} } {K_{su} E_0} \\newline \\enspace \\newline Q_{su} = C_{su} V \\newline \\enspace \\newline C_{su} = \\frac {k_{su} E_0A} {x} \\newline \\enspace \\newline V = \\frac{V_0} {K_{su}} \\newline \\enspace \\newline E_{su} = \\frac { K_{su} E_0A V_0 } { x K_{su}^2 E_0 } \\newline \\enspace \\newline E_{su} = \\frac {A V_0 } { x K_{su}  }` ,
                                        image:null
                                    },
                                ]
                            },
                            {
                                title: '13.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: `Bir paralel-levha kondansatörünün levha lanı A, levhaları arasındaki uzaklık D'dir. D uzaklığı levhaların boyutlarına göre çok küçüktür. Kondansatör, dielektrik sabiti K = a / y olan bir dielektrik madde ile doldurulmuştur. (a bir sabittir) Bu kondasatörün sığasını E_0, a, D, A cinsinden bulunuz. `,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `..... sorusu gelicek`,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: ' Adım 1',
                                        is_step: true,
                                        description: `\\text{Burdan kondasatörlerimizi çok} \\newline \\text{ sonsuz küçük kondasatör şeklinde düşünüp} \\newline \\text{Seri bir şekilde bağladığımız düşünelim.} \\newline \\enspace \\newline  \\frac{1} {C_{eş}} = \\intop \\frac {1} {dC} \\newline \\enspace \\newline \\frac {1} {dC} = \\frac {1} { \\frac {a} {y} \\frac {E_0 A} {dy}} \\newline \\enspace \\newline \\text{ Sınırlar 0 Dan D 'ye } \\newline \\enspace \\newline \\frac {1} {C_{eş}} = \\int_{0}^{D} \\frac {1} { \\frac {a} {y} \\frac {E_0 A} {dy}}`,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: ' Adım 2',
                                        is_step: true,
                                        description: `\\frac {1} {C_{eş}} = \\int_{0}^{D} \\frac {ydy} { a E_0 A } \\newline \\enspace \\newline \\text{ sabitleri integral dışına alalım } \\newline \\enspace \\newline \\frac {1} {C_{eş}} = \\frac {1} { a E_0 A } \\int_{0}^{D} ydy \\newline \\enspace \\newline \\frac {1} {C_{eş}} = \\frac {1} { a E_0 A } \\frac {D^2} {2} \\newline \\enspace \\newline \\boxed{C_{eş} =  \\frac {2 a E_0 A} { D^2 }}`,
                                        image:null
                                    },
                                ]
                            },
                            {
                                title: '14.Problem',
                                steps: [
                                    {
                                        index: 0,
                                        title: `a) Bir nokta yükün elektrik alanı E 1/r^2 ile orantıldır. Bir elektrik dipolün E si 1/r^3 ile orantılıdır. Demekki elelktrik dipolün oluşturduğu E nokta yükün E sine göre daha hızlı azalıyor. Neden ? Açıklayın. \n \n b) Gök gürültülü (yıldırımlı) fırtına sırasında arabanın içinde mi durmak güvenli, dışında mı? Neden? Açıklayın \n \n c) Eper bir uzayın bir bölgesinde E düzgünse ve x yönündeyse, o bölgedeki elektrik potansiyeli için ne söyleyebilirsiniz? \n \n d) R yarıçaplı A kapalı yüzeyi 2Q yükünü çevreliyor. 2R yarıçaplı B kapalı yüzeyi Q yükünü çevreliyor.Hangi yüzeyden (A veya B) geçen elektrik akı daha fazladır ? Neden? Açıklayın. \n \n e)Kalınlığı L olan büyük bir iletken levha bir kondansatörün paralel palkaları arasına yerleştirilmiştir, fakat plakalara dokunmamaktadır. Levha yerleştirildiğinde sığa artar mı, azalır mı, aynı mı kalır? Açıklayın`,
                                        extra_title: 'Soruyu oku',
                                        is_step: false,
                                        description: `\\text{Elektrik dipolün merkezinden P noktasına} \\newline \\text{oluşturduğu elektrik alanı uzaklığı(z)} \\newline \\text{elektrik dipolün arasındaki mesafe(d)} \\newline \\text{d/2z 1 den çok küçük olduğu için} `,
                                        image: 'https://n11scdn.akamaized.net/a1/450/spor-outdoor/step-ve-aerobik/hulahop-simli-duz-parlak-cember-70-cm-3lu-paket-ici-boncuklu__0754162302136810.jpg'
                                    },
                                    {
                                        index: 1,
                                        title:``,
                                        extra_title: 'a',
                                        is_step: true,
                                        description: `\\text{Elektrik dipolünün merkezinin P noktasına } \\newline \\text{uzaklığı y olsun merkezden + ve - yüke olan} \\newline \\text{uzaklığı a olsun y >> a olursa nokta yükün } \\newline \\text{elektrik alanına göre daha hızlı azalır.}  `,
                                        image:null
                                    },
                                    {
                                        index: 2,
                                        title:``,
                                        extra_title: 'b',
                                        is_step: true,
                                        description: `\\text{Arabaların yerle temeasını sağlayan} \\newline \\text{tek şey lastik ve lastik iletken} \\newline \\text{değil bu yüzden güvenlidir.}`,
                                        image:null
                                    },
                                    {
                                        index: 3,
                                        title:``,
                                        extra_title: 'c',
                                        description:`\\text{ Elektrik potansiyeli x e bağlı} \\newline \\text{ olmuş oluyor elektrik alanı düzgün} \\newline \\text{olduğu için}`,
                                        is_step: true,
                                        image:null
                                    },
                                     {
                                        index: 4,
                                        title:``,
                                        extra_title: 'd',
                                        is_step: true,
                                        description: `\\text{A kapalı yüzeyi çünkü} \\newline \\text{kapalı yüzeyin içinde kalan net yük} \\newline \\text{daha fazladır.}`,
                                        image:null
                                    },
                                    {
                                        index: 5,
                                        title:``,
                                        extra_title: 'e',
                                        is_step: true,
                                        description: `\\text{İletken Levha koyunca 2 seri bağlanmış} \\newline \\text{kondansatör gibi düşünelim} \\newline \\text{Levhalar arasındaki uzaklk yarıya} \\newline \\text{indiği için sığa artar.}`,
                                        image:null
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                title: "Termodinamik ve Akışkanlar",
                text: "Ders",
                categories: [
                    {
                        id: 1,
                        title: '1. Hafta Onerilen Problemler',
                        questions: [
                            {
                                title: ' Problem 1',
                                steps: [
                                    {
                                        index: 0,
                                        title: 'Soru oku',
                                        extra_title: 'Soru oku',
                                        is_step: false,
                                        description: `Kütlesi ihmal edilebilir bir kapta 50.0 C sıcaklıkta 0.200 kg su bulunmaktadır. Su ile 100.0 C sıcaklıkta ve atmosfer basıncında 0.0400 kg buhar temas ettirildikten sonra sistemin erişecegi son sıcaklıgı ve bu sıcaklıktaki buhar ve sıvı su miktarlarını hesaplayınız. ( Csu = 4190 J/kg.K, suyun buharlaşma ısısı: 2256 × 103 J/kg) (C: 100.0 C, 0.0214 kg buhar, 0.219 kg sıvı su)`,

                                    },
                                    {
                                        index: 1,
                                        is_step: true,
                                        title: 'Verilenleri Topla',
                                        extra_title: 'Verilenleri Topla',
                                        description: `T_{buhar}=100C,\\newline m_{buhar}=0.04kg,\\newline m_{su}=0.2kg,\\newline T_{su}=50C `,
                                    },
                                    {
                                        index: 2,
                                        is_step: true,
                                        extra_title: 'Termik Isıları toplayıp sıfıra eşitle (Denklem)',
                                        title: 'Buharı suya eklerken sıcaklığı düşer ve yoğuşmaya başlar ve termik dengedeki ısı enerjisi sıfıra eşittir',
                                        description: `Q_{su} + Q_{buhar} = 0 \\newline m * c * \\delta{T} + [ -m * L_{v}] = 0 \\newline m * c * \\delta{T} = m_{s} * \\delta{T} `
                                    },
                                    {
                                        index: 3,
                                        is_step: true,
                                        extra_title: 'Termik Isıları toplayıp sıfıra eşitle (Çözüm)',
                                        title: 'Buharı suya eklerken sıcaklığı düşer ve yoğuşmaya başlar ve termik dengedeki ısı enerjisi sıfıra eşittir',
                                        description: `0.2kg * 4190J/kg \\cdot K * [T - 50] \\newline =  \\newline 0.04kg * 2256 * 10^{6}J/kg \\newline T = 157C`
                                    },
                                    {
                                        index: 4,
                                        is_step: true,
                                        extra_title: 'Termik Isıları toplayıp sıfıra eşitle (Anlamı)',
                                        title: 'Bu, su tarafından emilen tüm buharın emilmediği anlamına gelir, çünkü tüm buhar suya dönüştürülemez, bu nedenle son sıcaklık 100c olur',
                                        description: `T = 157C`
                                    },
                                    {
                                        index: 5,
                                        is_step: true,
                                        extra_title: 'İki elementin ağırlığını hesapla',
                                        title: 'Molar Isı ağası Formülünü kullan (Denklem)',
                                        description: `Q = mc\\Delta{T} \\newline m_{buhar} = \\frac Q L_{vs}`
                                    },
                                    {
                                        index: 6,
                                        is_step: true,
                                        extra_title: 'İki elementin ağırlığını hesapla',
                                        title: 'Molar Isı ağası Formülünü kullan (Çözüm)',
                                        description: `m_{buhar} = \\frac Q L_{vs} \\newline \\frac {4.19*10^4J} {2256*10^3J/kg} \\newline =0.0186kg`
                                    },
                                    {
                                        index: 7,
                                        is_step: false,
                                        extra_title: 'İki elementin ağırlığını hesapla',
                                        title: 'Molar Isı ağası Formülünü kullan (Anlamı)',
                                        description: `Ne zaman sıcaklık 4.19 x 10^4 J lük ısı su tarafından emilirse \n\n Bunu Q = [m x C x δT]su \n\n S dan buhara dönüştürülen toplam ağırlık 0.0186kg \n\n Şimdi buhardan suya dönüşmemiş olan ağırlığı hesaplamaya çalışırsak \n\n 0.400 - 0.0.186 = 0.214kg ve su ve buhar halen konteynırımızın için buharın ağırlığınıda toplama ekleyip hesaplarsak yoğunlaşmış buhar ile birlikte \n\n Suyun toplam ağırlığı 0.0186 + 0.2 = 0.219kg olmuş olur.`
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                title: "Kalkülüs II",
                text: "Ders",
                categories: [
                ]
            },
            {
                title: "Bilgisayar Programlama",
                text: "Ders",
                categories: [
                ]
            },
            {
                title: "Ders Kalmadı",
                text: "Ders",
                categories: [
                ]
            },
        ];
        this.isLoading = false;
    }
}

export default LessonStore;
