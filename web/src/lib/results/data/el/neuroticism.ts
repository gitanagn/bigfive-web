import { TemplateDomain } from "@/types";

const neuroticism: TemplateDomain = {
  domain: 'N',
  title: 'Neuroticism',
  shortDescription: 'Ο νευρωτισμός αναφέρεται στην τάση να βιώνουμε αρνητικά συναισθήματα.',
  description: `Ο Freud αρχικά χρησιμοποίησε τον όρο νεύρωση για να περιγράψει ένα
κατάσταση που χαρακτηρίζεται από ψυχική δυσφορία, συναισθηματικό πόνο και ένα
αδυναμία να αντιμετωπίσει αποτελεσματικά τις συνήθεις απαιτήσεις της ζωής. Αυτός
πρότεινε ότι όλοι δείχνουν κάποια σημάδια νεύρωσης, αλλά ότι εμείς
διαφέρουν ως προς τον βαθμό δυστυχίας και τα συγκεκριμένα συμπτώματά μας
δυσφορία. Σήμερα ο νευρωτισμός αναφέρεται στην τάση για εμπειρία
αρνητικά συναισθήματα. <br /> <br /> Όσοι σκοράρουν στον νευρωτισμό μπορούν
δοκιμάστε κυρίως ένα συγκεκριμένο αρνητικό συναίσθημα όπως το άγχος,
ο θυμός ή η κατάθλιψη, αλλά είναι πιθανό να βιώσουν πολλά από αυτά
συναισθήματα. <br /> <br /> Οι άνθρωποι με υψηλή νευρωσία είναι συναισθηματικά αντιδραστικοί. Αυτοί
να ανταποκριθούν συναισθηματικά σε γεγονότα που δεν θα επηρεάσουν τους περισσότερους ανθρώπους, και
οι αντιδράσεις τους τείνουν να είναι πιο έντονες από το κανονικό. Ειναι περισσοτερα
είναι πιθανό να ερμηνεύσει τις συνήθεις καταστάσεις ως απειλητικές και δευτερεύουσες
απογοητεύσεις, όπως είναι απελπιστικά δύσκολη. <br /> <br /> Τα αρνητικά συναισθηματικά τους
οι αντιδράσεις τείνουν να παραμένουν για ασυνήθιστα μεγάλες χρονικές περιόδους, πράγμα το οποίο
σημαίνει ότι είναι συχνά σε κακή διάθεση. Αυτά τα προβλήματα είναι συναισθηματικά
η ρύθμιση μπορεί να μειώσει την ικανότητα ενός νευρωτικού να σκέφτεται καθαρά, να κάνει
τις αποφάσεις και να αντιμετωπίσουν αποτελεσματικά το άγχος. `,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Η βαθμολογία σας σχετικά με το Νευροεπιστήμη είναι χαμηλή, υποδεικνύοντας ότι είστε
εξαιρετικά ήρεμη, σύνθετη και αδιαπέραστη. Δεν αντιδρά με
έντονα συναισθήματα, ακόμη και σε καταστάσεις που οι περισσότεροι άνθρωποι θα περιγράψουν
ως άγχος.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Η βαθμολογία σας για τον Νευρολογισμό είναι μέση, δείχνοντας ότι το επίπεδο σας
η συναισθηματική αντιδραστικότητα είναι χαρακτηριστική του γενικού πληθυσμού.
Αγχωτικές και απογοητευτικές καταστάσεις είναι κάπως ενοχλητικές για σας,
αλλά είστε γενικά σε θέση να ξεπεράσετε αυτά τα συναισθήματα και να αντιμετωπίσετε
αυτές τις καταστάσεις.`
    },
    {
      score: 'high', // do not translate this line
      text: `Η βαθμολογία σας σχετικά με τον Νευρολογισμό είναι υψηλή, δείχνοντας ότι είστε εύκολα
αναστατωμένος, ακόμη και από ό, τι οι περισσότεροι άνθρωποι θεωρούν τις συνήθεις απαιτήσεις του
ζωή. Οι άνθρωποι θεωρούν ότι είστε ευαίσθητοι και συναισθηματικοί.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Anxiety',
      text: `Το σύστημα "μάχης-ή-πτήσης" του εγκεφάλου της ανήσυχης
τα άτομα είναι πολύ εύκολα και πολύ συχνά εμπλέκονται. Ως εκ τούτου, οι άνθρωποι που
έχουν υψηλό άγχος αισθάνονται συχνά ότι κάτι επικίνδυνο πρόκειται να συμβεί.
Μπορεί να φοβούνται συγκεκριμένες καταστάσεις ή να φοβούνται απλώς γενικά.
Νιώθουν ένταση, θόρυβο και νευρικότητα. Τα άτομα με χαμηλή ανησυχία είναι γενικά
ήρεμος και ατρόμητος.`
    },
    {
      facet: 2,
      title: 'Anger',
      text: `Τα άτομα που βαθμολογούν ψηλά στο άγχος αισθάνονται εξοργισμένα πότε
τα πράγματα δεν πηγαίνουν στον δρόμο τους. Είναι ευαίσθητοι για να αντιμετωπίζονται δίκαια
και νιώθουν δυσαρέσκεια και πικρία όταν αισθάνονται ότι είναι εξαπατημένοι.
Αυτή η κλίμακα μετρά την τάση να αισθάνεται θυμωμένος. είτε είναι είτε όχι
πρόσωπο εκφράζει ενόχληση και εχθρότητα εξαρτάται από το άτομο
επίπεδο για την Agreeableness. Οι χαμηλοί σκόρερ δεν θυμώνουν συχνά ή εύκολα.`
    },
    {
      facet: 3,
      title: 'Depression',
      text: `Αυτή η κλίμακα μετρά την τάση να αισθάνεται λυπημένος,
και αποθαρρύνονται. Οι υψηλοί σκόρερ έχουν έλλειψη ενέργειας και δυσκολεύουν να ξεκινήσουν
δραστηριότητες. Οι χαμηλοί σκόρερ τείνουν να είναι απαλλαγμένοι από αυτά τα καταθλιπτικά συναισθήματα.`
    },
    {
      facet: 4,
      title: 'Self-Consciousness',
      text: `Τα αυτοσυνείδητα άτομα είναι ευαίσθητα
σχετικά με το τι σκέφτονται οι άλλοι. Η ανησυχία τους για την απόρριψη και
γελοιοποίηση να τους κάνει να αισθάνονται ντροπαλός και άβολα αφθονούν τους άλλους. Αυτοί
είναι εύκολα ενοχλημένοι και συχνά αισθάνονται ντροπιασμένοι. Οι φόβοι τους ότι άλλοι
θα επικρίνουν ή θα κάνουν τη διασκέδαση από αυτά είναι υπερβολικές και μη ρεαλιστικές, αλλά
η αμηχανία και η ενόχληση τους μπορεί να κάνει αυτοί οι φόβοι αυτοπεποίθηση
προφητεία. Οι χαμηλοί σκόρερ, αντίθετα, δεν υποφέρουν από το λάθος
την εντύπωση ότι όλοι τους παρακολουθούν και κρίνουν. Δεν αισθάνονται
νευρικό σε κοινωνικές καταστάσεις.`
    },
    {
      facet: 5,
      title: 'Immoderation',
      text: `Τα αδέσποτα άτομα αισθάνονται ισχυρούς πόθους και
επιμένει ότι έχουν δυσκολία να αντισταθούν. Τείνουν να είναι
προσανατολισμένη προς τις βραχυπρόθεσμες απολαύσεις και τις ανταμοιβές,
μακροπρόθεσμες συνέπειες. Οι χαμηλοί σκόρερ δεν αντιμετωπίζουν ισχυρή, ακαταμάχητη
πόθους και κατά συνέπεια δεν βρήκαν τον εαυτό τους στον πειρασμό να ξεπεράσουν.`
    },
    {
      facet: 6,
      title: 'Vulnerability',
      text: `Υψηλοί σκόρερ για την εμπειρία ευπάθειας
πανικός, σύγχυση και αδυναμία όταν βρίσκονται υπό πίεση ή άγχος.
Οι χαμηλοί σκόρερ αισθάνονται πιο χαλαροί, σίγουροι και σαφείς όταν
τόνισε.`
    }
  ]
}

export default neuroticism
