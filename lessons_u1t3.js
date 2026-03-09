// Unit 1 Topic 3 lesson content data
const U1T3_LESSONS = [
  {
    id: "1-3-1",
    week: "Term 2 · Wk 1–2",
    num: 1,
    title: "Consciousness & Attention",
    subtitle: "Arousal Continuum · Selective vs Divided Attention",
    duration: "3 lessons",
    syllabus: "Describe consciousness as a continuum; explain selective and divided attention with reference to relevant brain structures.",
    slides: { folder: "Unit 1_Topic 3_Consciousness and Sleep", start: 1, end: 33 },
    sections: [
      {
        heading: "🧠 What is Consciousness?",
        content: `<p><strong>Consciousness</strong> refers to our awareness of ourselves and our environment — including our thoughts, feelings, sensations, and perceptions.</p>
        <div class="ls-defbox"><div class="ls-def-term">Consciousness</div><div class="ls-def-body">An awareness of objects and events in the external world and of our own existence and mental processes; the subjective experience of being awake and aware.</div></div>
        <p>Consciousness is not an all-or-nothing state — it exists on a <strong>continuum</strong> ranging from high alertness to complete unconsciousness.</p>`
      },
      {
        heading: "📊 The Arousal Continuum",
        content: `<p>Arousal refers to the degree of alertness and responsiveness to stimulation. It exists on a spectrum:</p>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Level</th><th>State</th><th>Characteristics</th></tr></thead>
          <tbody>
            <tr><td>Highest</td><td>High alertness / panic</td><td>Intense focus, rapid heart rate, heightened senses</td></tr>
            <tr><td>↓</td><td>Alert wakefulness</td><td>Fully conscious, focused attention, responsive</td></tr>
            <tr><td>↓</td><td>Relaxed wakefulness</td><td>Calm, aware but not intensely focused</td></tr>
            <tr><td>↓</td><td>Daydreaming / drowsiness</td><td>Reduced awareness, mind wandering</td></tr>
            <tr><td>↓</td><td>Light sleep</td><td>Easily awakened, some responsiveness remains</td></tr>
            <tr><td>↓</td><td>Deep sleep</td><td>Difficult to rouse, minimal responsiveness</td></tr>
            <tr><td>Lowest</td><td>Coma / anaesthesia</td><td>No conscious awareness, no voluntary responses</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "🎯 Selective Attention",
        content: `<div class="ls-defbox"><div class="ls-def-term">Selective Attention</div><div class="ls-def-body">The ability to focus on one particular stimulus or task while filtering out other irrelevant stimuli in the environment.</div></div>
        <p><strong>Example:</strong> The "cocktail party effect" — you can focus on one conversation in a noisy room, filtering out all other voices. Yet your name being called can still break through.</p>
        <h5>Brain structures involved:</h5>
        <ul>
          <li><strong>Reticular Formation (RF)</strong> — acts as a filter/gatekeeper; determines which sensory information reaches the cortex</li>
          <li><strong>Prefrontal Cortex (PFC)</strong> — directs and maintains focused attention; involved in decision-making about what to attend to</li>
          <li><strong>Thalamus</strong> — relay station; routes sensory information to relevant cortical areas</li>
        </ul>
        <div class="ls-callout teal"><strong>Key study:</strong> Cherry (1953) — Dichotic Listening Task. Participants wearing headphones heard different messages in each ear and were asked to "shadow" (repeat aloud) one message. They could recall little about the unattended message, demonstrating selective filtering.</div>`
      },
      {
        heading: "÷ Divided Attention",
        content: `<div class="ls-defbox"><div class="ls-def-term">Divided Attention</div><div class="ls-def-body">The ability to allocate attention to two or more tasks simultaneously. Also called multi-tasking.</div></div>
        <p>Divided attention is possible when at least one task is <strong>automatic</strong> (well-practised and requiring little conscious effort).</p>
        <h5>Factors affecting divided attention:</h5>
        <ul>
          <li><strong>Task complexity</strong> — two complex tasks are harder to perform simultaneously than one complex + one simple</li>
          <li><strong>Practice/automaticity</strong> — skilled tasks require less conscious attention, freeing capacity for a second task</li>
          <li><strong>Task similarity</strong> — tasks using the same sensory channel (e.g. two auditory tasks) compete more than tasks using different channels</li>
        </ul>
        <div class="ls-callout gold">🎬 <strong>Practical link:</strong> The Stroop Task demonstrates how divided attention breaks down when automatic and controlled processing conflict — naming the ink colour of a colour-word requires controlled attention even though reading the word is automatic.</div>
        <div class="ls-callout navy"><strong>SHE link:</strong> Research on divided attention (e.g. mobile phone use while driving) has significant public health implications. Strayer et al. (2006) found that hands-free mobile use impairs driving as much as being at the legal alcohol limit.</div>`
      }
    ]
  },
  {
    id: "1-3-2",
    week: "Term 2 · Wk 2",
    num: 2,
    title: "Brain Structures & the Sleep-Wake Cycle",
    subtitle: "Hypothalamus · SCN · Pineal Gland · Melatonin · Thalamus · Reticular Formation",
    duration: "2 lessons",
    syllabus: "Explain how brain structures and hormones regulate the sleep-wake cycle, including the role of the hypothalamus/SCN, pineal gland, melatonin, thalamus, and reticular formation.",
    slides: { folder: "Unit 1_Topic 3_Consciousness and Sleep", start: 34, end: 44 },
    sections: [
      {
        heading: "🕐 Circadian Rhythm & the Sleep-Wake Cycle",
        content: `<p>The <strong>sleep-wake cycle</strong> is a biological rhythm that repeats approximately every 24 hours, regulating when we feel alert versus sleepy.</p>
        <div class="ls-defbox"><div class="ls-def-term">Circadian Rhythm</div><div class="ls-def-body">A biological cycle that repeats approximately every 24 hours, governing many physiological processes including the sleep-wake cycle, body temperature, and hormone release.</div></div>
        <p>This rhythm is maintained by an internal "body clock" and is influenced by external cues — particularly <strong>light</strong>.</p>`
      },
      {
        heading: "🧬 Key Brain Structures & Hormones",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Structure / Hormone</th><th>Location / Type</th><th>Role in Sleep-Wake Cycle</th></tr></thead>
          <tbody>
            <tr><td><strong>Hypothalamus</strong></td><td>Deep forebrain</td><td>Contains the SCN (master body clock); regulates circadian timing and coordinates sleep-wake signals</td></tr>
            <tr><td><strong>Suprachiasmatic Nucleus (SCN)</strong></td><td>Within hypothalamus</td><td>Master circadian pacemaker; receives light signals from retina via optic nerve; resets the internal clock daily</td></tr>
            <tr><td><strong>Pineal Gland</strong></td><td>Epithalamus (near thalamus)</td><td>Receives signals from SCN; secretes melatonin in response to darkness</td></tr>
            <tr><td><strong>Melatonin</strong></td><td>Hormone (from pineal gland)</td><td>Rises in the evening → promotes sleepiness; suppressed by light exposure. Peaks around 2–4am, declines before waking</td></tr>
            <tr><td><strong>Thalamus</strong></td><td>Central forebrain</td><td>Relay station for sensory information; during sleep, blocks sensory signals from reaching cortex (reducing responsiveness)</td></tr>
            <tr><td><strong>Reticular Formation (RF)</strong></td><td>Brainstem (midbrain/pons)</td><td>Controls arousal and wakefulness; when active = alert; when inactive = sleep. Also called the reticular activating system (RAS)</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout teal"><strong>How it works together:</strong> Light → Retina → SCN → Pineal gland suppresses melatonin → RF activated → Wakefulness. Darkness → SCN → Pineal releases melatonin → RF inhibited → Sleepiness → Sleep onset.</div>`
      },
      {
        heading: "💡 Light & the SCN",
        content: `<p>The SCN is entrained (reset) daily by <strong>light</strong> — specifically blue wavelength light. This is why:</p>
        <ul>
          <li>Bright morning light promotes wakefulness and advances the sleep phase</li>
          <li>Evening screen use (blue light) suppresses melatonin and delays sleep onset</li>
          <li>Blind individuals with damaged retinal pathways to the SCN may have disrupted circadian rhythms</li>
        </ul>
        <div class="ls-callout navy"><strong>SHE link:</strong> Understanding the SCN/melatonin pathway underpins treatments for circadian disorders — including bright light therapy for adolescent delayed sleep phase and jet lag management.</div>`
      }
    ]
  },
  {
    id: "1-3-3",
    week: "Term 2 · Wk 2–4",
    num: 3,
    title: "Measuring Sleep — EEG, Sleep Stages & Cycles",
    subtitle: "EEG · EMG · EOG · NREM · REM · Sleep Architecture",
    duration: "4–5 lessons",
    syllabus: "Describe the techniques used to measure sleep (EEG, EMG, EOG) and the characteristics of NREM (Stages 1–3) and REM sleep, including typical sleep cycles across a night.",
    slides: { folder: "Unit 1_Topic 3_Consciousness and Sleep", start: 45, end: 84 },
    sections: [
      {
        heading: "🔬 Measuring Sleep — The Polysomnograph",
        content: `<p>A <strong>polysomnograph (PSG)</strong> is the standard tool for measuring sleep in a laboratory. It simultaneously records multiple physiological measures:</p>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Measure</th><th>Full Name</th><th>What it measures</th><th>Sleep use</th></tr></thead>
          <tbody>
            <tr><td><strong>EEG</strong></td><td>Electroencephalograph</td><td>Electrical activity (brainwaves) via scalp electrodes</td><td>Identifies sleep stages by wave frequency/amplitude</td></tr>
            <tr><td><strong>EMG</strong></td><td>Electromyograph</td><td>Muscle tension/activity via chin/leg electrodes</td><td>Distinguishes REM (muscle atonia) from NREM</td></tr>
            <tr><td><strong>EOG</strong></td><td>Electrooculograph</td><td>Eye movements via electrodes near the eyes</td><td>Identifies REM sleep (rapid eye movements) vs NREM</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "🌊 Brainwave Types",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Wave</th><th>Frequency</th><th>Amplitude</th><th>Associated state</th></tr></thead>
          <tbody>
            <tr><td><strong>Beta (β)</strong></td><td>13–30 Hz</td><td>Low</td><td>Active, alert wakefulness; focused thinking</td></tr>
            <tr><td><strong>Alpha (α)</strong></td><td>8–13 Hz</td><td>Medium</td><td>Relaxed wakefulness; eyes closed, calm</td></tr>
            <tr><td><strong>Theta (θ)</strong></td><td>4–7 Hz</td><td>Medium</td><td>Light sleep (NREM Stage 1 & 2); drowsiness</td></tr>
            <tr><td><strong>Delta (δ)</strong></td><td>0.5–4 Hz</td><td>High</td><td>Deep slow-wave sleep (NREM Stage 3)</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "😴 NREM Sleep — Stages 1, 2 & 3",
        content: `<p><strong>NREM (Non-Rapid Eye Movement)</strong> sleep has three stages, progressing from light to deep:</p>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Stage</th><th>Duration</th><th>Brainwaves</th><th>EMG/EOG</th><th>Characteristics</th></tr></thead>
          <tbody>
            <tr><td><strong>NREM 1</strong></td><td>1–7 min</td><td>Alpha → Theta</td><td>Slow eye rolls, reduced muscle tone</td><td>Hypnic jerks may occur; easily awakened; transitional</td></tr>
            <tr><td><strong>NREM 2</strong></td><td>10–25 min</td><td>Theta + sleep spindles + K-complexes</td><td>No eye movement, reduced EMG</td><td>True sleep begins; harder to awaken; body temp drops</td></tr>
            <tr><td><strong>NREM 3</strong></td><td>20–40 min</td><td>Delta (≥20% of stage)</td><td>Minimal eye movement, very low EMG</td><td>Slow-wave/deep sleep; hardest to wake; growth hormone released; parasomnias occur here</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout navy"><strong>Note:</strong> The old "Stage 4" has been merged into Stage 3 in current sleep science. You may see older resources refer to 4 NREM stages.</div>`
      },
      {
        heading: "👁 REM Sleep",
        content: `<div class="ls-defbox"><div class="ls-def-term">REM (Rapid Eye Movement) Sleep</div><div class="ls-def-body">A distinct sleep stage characterised by rapid eye movements, brain activity similar to wakefulness, muscle atonia (paralysis), and vivid dreaming.</div></div>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Feature</th><th>REM characteristics</th></tr></thead>
          <tbody>
            <tr><td>Brainwaves (EEG)</td><td>Beta-like waves — similar to alert wakefulness (hence "paradoxical sleep")</td></tr>
            <tr><td>Eye movements (EOG)</td><td>Rapid, darting movements in multiple directions</td></tr>
            <tr><td>Muscle tone (EMG)</td><td>Muscle atonia — voluntary muscles paralysed (except diaphragm/eyes)</td></tr>
            <tr><td>Dreams</td><td>Vivid, narrative dreams; most recalled dreams occur during REM</td></tr>
            <tr><td>Heart rate / breathing</td><td>Irregular, increased</td></tr>
            <tr><td>Function</td><td>Memory consolidation, emotional processing, neural development</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "🔄 Sleep Architecture — The 90-Minute Cycle",
        content: `<p>A typical night's sleep consists of <strong>4–6 sleep cycles</strong>, each lasting approximately <strong>90 minutes</strong>:</p>
        <ul>
          <li>Each cycle moves through NREM 1 → NREM 2 → NREM 3 → back to NREM 2 → REM</li>
          <li><strong>Early in the night:</strong> more deep NREM (Stage 3) sleep — important for physical restoration</li>
          <li><strong>Later in the night:</strong> REM periods get longer (from ~10 min to ~45 min) — important for memory and emotional processing</li>
        </ul>
        <div class="ls-callout teal"><strong>Exam tip:</strong> Draw and label a sleep architecture diagram showing 5 cycles across 8 hours, with Stage 3 dominant early and REM dominant late. This is a common exam question.</div>`
      }
    ]
  },
  {
    id: "1-3-4",
    week: "Term 2 · Wk 4",
    num: 4,
    title: "Why Do We Sleep? — Sleep Theories",
    subtitle: "Restoration Theory · Evolutionary Theory",
    duration: "2 lessons",
    syllabus: "Discuss the purpose of sleep with reference to restoration theory and evolutionary theory, including supporting evidence and limitations of each.",
    slides: { folder: "Unit 1_Topic 3_Consciousness and Sleep", start: 85, end: 93 },
    sections: [
      {
        heading: "🔧 Restoration Theory (Oswald, 1966)",
        content: `<div class="ls-defbox"><div class="ls-def-term">Restoration Theory</div><div class="ls-def-body">Sleep serves to restore and repair the body and brain. During sleep, biological processes that cannot occur during wakefulness take place — including tissue repair, immune function, and memory consolidation.</div></div>
        <h5>Key evidence:</h5>
        <ul>
          <li><strong>Growth hormone</strong> is released primarily during NREM Stage 3 — important for tissue growth and repair</li>
          <li><strong>Immune function</strong> — sleep deprivation significantly reduces immune response; sleep increases cytokine production</li>
          <li><strong>REM sleep and memory</strong> — REM deprivation impairs learning and memory consolidation (Stickgold, 2005)</li>
          <li><strong>Physical recovery</strong> — athletes require more sleep after intense exercise; muscle repair occurs during NREM</li>
        </ul>
        <h5>Limitations:</h5>
        <ul>
          <li>Does not fully explain <em>why</em> restoration requires unconsciousness — many repair processes could theoretically occur during rest without sleep</li>
          <li>Animals with high metabolic rates (e.g. shrews) sleep more, consistent with restoration, but exceptions exist</li>
        </ul>`
      },
      {
        heading: "🦁 Evolutionary Theory (Meddis, 1975)",
        content: `<div class="ls-defbox"><div class="ls-def-term">Evolutionary Theory</div><div class="ls-def-body">Sleep evolved as an adaptive behaviour because it kept animals safe from predators during periods when activity would be dangerous (usually at night), and conserved energy during times when food-seeking was unproductive.</div></div>
        <h5>Key claims:</h5>
        <ul>
          <li>Animals sleep when <strong>safe to do so</strong> — prey animals (e.g. rabbits) sleep less and in shorter bouts; predators (e.g. lions) sleep more</li>
          <li>Sleep <strong>conserves energy</strong> — metabolic rate drops during sleep, reducing caloric needs</li>
          <li>Sleep keeps animals <strong>immobile and quiet</strong> during periods of high predation risk (typically night)</li>
        </ul>
        <h5>Supporting evidence:</h5>
        <ul>
          <li>Sleep duration across species correlates with predation risk and metabolic rate</li>
          <li>Dolphins and some birds show <strong>unihemispheric sleep</strong> — one brain hemisphere sleeps while the other stays alert for predators</li>
        </ul>
        <h5>Limitations:</h5>
        <ul>
          <li>Being unconscious is actually <em>dangerous</em> — does not explain why vulnerability was worth the evolutionary trade-off</li>
          <li>Does not explain the specific functions of REM vs NREM sleep</li>
          <li>Humans sleep in beds/buildings — the predator-avoidance rationale is less relevant in modern environments</li>
        </ul>`
      },
      {
        heading: "⚖️ Comparing the Two Theories",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Feature</th><th>Restoration Theory</th><th>Evolutionary Theory</th></tr></thead>
          <tbody>
            <tr><td>Main claim</td><td>Sleep restores body and brain</td><td>Sleep evolved for survival/energy conservation</td></tr>
            <tr><td>Key theorist</td><td>Oswald (1966)</td><td>Meddis (1975)</td></tr>
            <tr><td>Explains REM?</td><td>Yes — memory consolidation</td><td>Partially — just another sleep phase</td></tr>
            <tr><td>Key evidence</td><td>Growth hormone, immune function, memory studies</td><td>Cross-species sleep patterns, predation correlations</td></tr>
            <tr><td>Main limitation</td><td>Why unconsciousness specifically?</td><td>Sleep creates vulnerability, not safety</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout teal"><strong>Exam tip:</strong> When asked to "discuss" sleep theories, present both, evaluate each with evidence, and note that they are <em>complementary</em> rather than mutually exclusive — sleep likely serves multiple functions.</div>`
      }
    ]
  },
  {
    id: "1-3-5",
    week: "Term 2 · Wk 5–6",
    num: 5,
    title: "Sleep Across the Lifespan & Deprivation",
    subtitle: "Lifespan Changes · Adolescent Sleep-Wake Shift · Sleep Deprivation Effects",
    duration: "3 lessons",
    syllabus: "Describe changes in sleep patterns across the lifespan, including the adolescent sleep-wake shift, and explain the consequences of sleep deprivation.",
    slides: { folder: "Unit 1_Topic 3_Consciousness and Sleep", start: 94, end: 109 },
    sections: [
      {
        heading: "📈 Sleep Changes Across the Lifespan",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Life Stage</th><th>Total Sleep</th><th>REM %</th><th>Key features</th></tr></thead>
          <tbody>
            <tr><td>Newborns (0–3 mo)</td><td>14–17 hrs</td><td>~50%</td><td>Polyphasic (many short cycles); REM dominant — supports brain development</td></tr>
            <tr><td>Infants (4–11 mo)</td><td>12–15 hrs</td><td>~30%</td><td>Sleep consolidates; circadian rhythm developing</td></tr>
            <tr><td>Toddlers (1–2 yrs)</td><td>11–14 hrs</td><td>~25%</td><td>Naps reduce; nighttime sleep lengthens</td></tr>
            <tr><td>Children (6–12 yrs)</td><td>9–11 hrs</td><td>~20%</td><td>Largely monophasic; Stage 3 dominant; parasomnias peak</td></tr>
            <tr><td>Adolescents (13–17)</td><td>8–10 hrs</td><td>~20%</td><td>Circadian phase delay; later sleep onset and wake times</td></tr>
            <tr><td>Adults (18–64)</td><td>7–9 hrs</td><td>~20%</td><td>Stable architecture; Stage 3 gradually reduces with age</td></tr>
            <tr><td>Older adults (65+)</td><td>7–8 hrs</td><td>~15%</td><td>More fragmented; less Stage 3; earlier sleep timing; more night awakenings</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "🌙 Adolescent Sleep-Wake Shift",
        content: `<p>Adolescents experience a <strong>biological delay in their circadian rhythm</strong> — their internal clock shifts approximately 2 hours later compared to children and adults.</p>
        <h5>Causes:</h5>
        <ul>
          <li><strong>Delayed melatonin release</strong> — melatonin is secreted later in the evening during puberty, delaying sleep onset</li>
          <li><strong>Changes in sleep pressure (homeostatic drive)</strong> — adolescents accumulate sleep pressure more slowly, meaning they can stay awake later without feeling as tired</li>
          <li>Both biological changes are linked to puberty hormones</li>
        </ul>
        <h5>Consequences:</h5>
        <ul>
          <li>Natural sleep time shifts to ~11pm–12am, but school start times remain early (7:30–8:30am)</li>
          <li>This creates <strong>chronic partial sleep deprivation</strong> in most adolescents</li>
          <li>Effects: impaired attention, memory, decision-making; increased risk-taking; mood dysregulation; increased depression/anxiety risk</li>
        </ul>
        <div class="ls-callout navy"><strong>SHE link:</strong> There is strong public health advocacy for later school start times (8:30am+) based on this research. The American Academy of Pediatrics recommends no school start before 8:30am for adolescents.</div>`
      },
      {
        heading: "😵 Consequences of Sleep Deprivation",
        content: `<h5>Cognitive effects:</h5>
        <ul>
          <li>Reduced attention, concentration, and reaction time</li>
          <li>Impaired working memory and learning</li>
          <li>Poor decision-making and increased impulsivity</li>
          <li>Reduced creativity and problem-solving ability</li>
        </ul>
        <h5>Physical effects:</h5>
        <ul>
          <li>Increased cortisol (stress hormone) levels</li>
          <li>Suppressed immune function</li>
          <li>Disrupted growth hormone release</li>
          <li>Increased risk of obesity, diabetes, cardiovascular disease (chronic deprivation)</li>
        </ul>
        <h5>Psychological/emotional effects:</h5>
        <ul>
          <li>Mood dysregulation — irritability, emotional reactivity</li>
          <li>Increased risk of anxiety and depression</li>
          <li>Hallucinations (extreme deprivation — e.g. Peter Tripp, 1959: 201 hours awake; Randy Gardner, 1964: 264 hours awake)</li>
        </ul>
        <div class="ls-callout gold">🎬 <strong>Case studies:</strong> Peter Tripp (201 hrs, 1959) and Randy Gardner (264 hrs, 1964) demonstrated the severe psychological and cognitive effects of extended sleep deprivation, including paranoia, hallucinations, and severe cognitive impairment — with Gardner showing near-full recovery after sleep.</div>`
      }
    ]
  },
  {
    id: "1-3-6",
    week: "Term 2 · Wk 6–7",
    num: 6,
    title: "Sleep Disorders",
    subtitle: "Narcolepsy · Insomnia · Sleep Apnoea · Sleepwalking",
    duration: "2 lessons",
    syllabus: "Compare the characteristics, causes, and impacts of common sleep disorders: narcolepsy, insomnia, sleep apnoea, and sleepwalking.",
    slides: { folder: "Unit 1_Topic 3_Consciousness and Sleep", start: 110, end: 115 },
    sections: [
      {
        heading: "😴 Overview of Sleep Disorders",
        content: `<p>Sleep disorders are conditions that consistently disrupt normal sleep patterns, quality, or timing, significantly impacting daytime functioning.</p>
        <div class="ls-callout teal"><strong>Note:</strong> Sleep disorders are diagnosed using polysomnography (PSG), sleep diaries, and clinical interview. The DSM-5-TR classifies them as a distinct category of mental disorders.</div>`
      },
      {
        heading: "⚡ Narcolepsy",
        content: `<div class="ls-defbox"><div class="ls-def-term">Narcolepsy</div><div class="ls-def-body">A chronic neurological disorder characterised by excessive daytime sleepiness and sudden, uncontrollable sleep attacks, often accompanied by cataplexy (sudden muscle weakness triggered by emotion).</div></div>
        <h5>Key features:</h5>
        <ul>
          <li><strong>Sleep attacks</strong> — sudden, irresistible urge to sleep at inappropriate times (mid-conversation, while eating)</li>
          <li><strong>Cataplexy</strong> — sudden loss of muscle tone triggered by strong emotion (laughter, surprise); can range from jaw drop to complete collapse</li>
          <li><strong>Sleep paralysis</strong> — temporary inability to move when falling asleep or waking</li>
          <li><strong>Hypnagogic hallucinations</strong> — vivid dream-like experiences when falling asleep</li>
        </ul>
        <h5>Cause:</h5>
        <ul>
          <li>Loss of <strong>hypocretin (orexin)</strong>-producing neurons in the hypothalamus — a neurotransmitter that promotes wakefulness and stabilises sleep-wake transitions</li>
          <li>Thought to involve autoimmune destruction of these neurons</li>
        </ul>`
      },
      {
        heading: "🌃 Insomnia",
        content: `<div class="ls-defbox"><div class="ls-def-term">Insomnia</div><div class="ls-def-body">A sleep disorder characterised by persistent difficulty initiating or maintaining sleep, or non-restorative sleep, occurring at least 3 nights per week for at least 3 months, causing significant daytime impairment.</div></div>
        <h5>Types:</h5>
        <ul>
          <li><strong>Sleep-onset insomnia</strong> — difficulty falling asleep</li>
          <li><strong>Sleep-maintenance insomnia</strong> — difficulty staying asleep / frequent night wakings</li>
          <li><strong>Early-morning awakening</strong> — waking too early and unable to return to sleep</li>
        </ul>
        <h5>Causes (biopsychosocial):</h5>
        <ul>
          <li><strong>Biological:</strong> hyperarousal of CNS, circadian disruption, chronic pain</li>
          <li><strong>Psychological:</strong> anxiety, depression, excessive worry about sleep (sleep anxiety)</li>
          <li><strong>Social/environmental:</strong> noise, irregular schedules, poor sleep hygiene, caffeine/alcohol</li>
        </ul>`
      },
      {
        heading: "😮 Sleep Apnoea",
        content: `<div class="ls-defbox"><div class="ls-def-term">Sleep Apnoea</div><div class="ls-def-body">A disorder in which breathing repeatedly stops and starts during sleep, causing brief arousals (often unremembered), reduced blood oxygen levels, and fragmented sleep.</div></div>
        <h5>Types:</h5>
        <ul>
          <li><strong>Obstructive Sleep Apnoea (OSA)</strong> — most common; throat muscles relax and block the airway; associated with obesity, large neck circumference</li>
          <li><strong>Central Sleep Apnoea</strong> — brain fails to send proper signals to breathing muscles; rarer</li>
        </ul>
        <h5>Signs:</h5>
        <ul>
          <li>Loud snoring, gasping, or choking sounds during sleep</li>
          <li>Excessive daytime sleepiness despite adequate time in bed</li>
          <li>Morning headaches, poor concentration</li>
        </ul>
        <h5>Health consequences:</h5>
        <ul>
          <li>Increased risk of hypertension, heart disease, stroke, type 2 diabetes</li>
        </ul>`
      },
      {
        heading: "🚶 Sleepwalking (Somnambulism)",
        content: `<div class="ls-defbox"><div class="ls-def-term">Sleepwalking (Somnambulism)</div><div class="ls-def-body">A parasomnia involving complex behaviours (walking, talking, eating) performed during NREM Stage 3 sleep, with no conscious awareness or memory of the episode.</div></div>
        <h5>Key features:</h5>
        <ul>
          <li>Occurs during <strong>NREM Stage 3</strong> (deep slow-wave sleep) — typically in the first third of the night</li>
          <li>Eyes open but glazed; person appears awake but is asleep</li>
          <li><strong>No memory</strong> of the episode on waking</li>
          <li>More common in <strong>children</strong> (due to high amounts of Stage 3 sleep); usually outgrown</li>
        </ul>
        <h5>Causes/triggers:</h5>
        <ul>
          <li>Genetic predisposition (strong family history component)</li>
          <li>Sleep deprivation, fever, stress, alcohol (all increase Stage 3 intensity)</li>
        </ul>
        <div class="ls-callout navy"><strong>Myth buster:</strong> It is <em>not</em> dangerous to wake a sleepwalker — they may be confused and disoriented but it is not harmful. Gently guide them back to bed.</div>`
      },
      {
        heading: "📊 Sleep Disorders Comparison Table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Feature</th><th>Narcolepsy</th><th>Insomnia</th><th>Sleep Apnoea</th><th>Sleepwalking</th></tr></thead>
          <tbody>
            <tr><td>Sleep stage affected</td><td>REM (intrudes into wake)</td><td>All stages disrupted</td><td>All stages (arousals)</td><td>NREM Stage 3</td></tr>
            <tr><td>Main symptom</td><td>Sudden sleep attacks, cataplexy</td><td>Difficulty sleeping</td><td>Breathing stops repeatedly</td><td>Complex behaviour while asleep</td></tr>
            <tr><td>Awareness during episode</td><td>No</td><td>Fully aware (distressing)</td><td>No (unremembered arousals)</td><td>No</td></tr>
            <tr><td>Main cause</td><td>Loss of hypocretin neurons</td><td>Biopsychosocial (multiple)</td><td>Airway obstruction / CNS</td><td>Genetic + sleep deprivation</td></tr>
            <tr><td>Who is most affected</td><td>Any age; onset often adolescence</td><td>Adults; increases with age</td><td>Middle-aged, overweight males</td><td>Children (3–12 years)</td></tr>
          </tbody>
        </table></div>`
      }
    ]
  },
  {
    id: "1-3-7",
    week: "Term 2 · Wk 7–8",
    num: 7,
    title: "Sleep Disorder Treatments",
    subtitle: "CBT-I · Bright Light Therapy · Practical Activities",
    duration: "2–3 lessons",
    syllabus: "Describe treatment interventions for sleep disorders, including cognitive behavioural therapy for insomnia (CBT-I) and bright light therapy.",
    slides: { folder: "Unit 1_Topic 3_Consciousness and Sleep", start: 116, end: 133 },
    sections: [
      {
        heading: "🧠 Cognitive Behavioural Therapy for Insomnia (CBT-I)",
        content: `<div class="ls-defbox"><div class="ls-def-term">CBT-I (Cognitive Behavioural Therapy for Insomnia)</div><div class="ls-def-body">A structured, evidence-based psychological treatment for insomnia that addresses the thoughts, behaviours, and habits that perpetuate sleep difficulties. Considered the gold-standard first-line treatment for chronic insomnia.</div></div>
        <h5>Components of CBT-I:</h5>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Component</th><th>What it involves</th><th>Targets</th></tr></thead>
          <tbody>
            <tr><td><strong>Sleep restriction therapy</strong></td><td>Temporarily limit time in bed to match actual sleep time; gradually extend</td><td>Builds sleep pressure; consolidates sleep</td></tr>
            <tr><td><strong>Stimulus control</strong></td><td>Use bed only for sleep/sex; get up if unable to sleep after 20 min</td><td>Re-associates bed with sleepiness, not wakefulness</td></tr>
            <tr><td><strong>Cognitive restructuring</strong></td><td>Identify and challenge unhelpful beliefs about sleep (e.g. "I must get 8 hrs or I can't function")</td><td>Reduces sleep anxiety and hyperarousal</td></tr>
            <tr><td><strong>Sleep hygiene education</strong></td><td>Consistent wake times, limit caffeine/alcohol, reduce screen use, cool dark room</td><td>Optimises sleep environment and habits</td></tr>
            <tr><td><strong>Relaxation techniques</strong></td><td>Progressive muscle relaxation, breathing exercises, mindfulness</td><td>Reduces physiological and cognitive arousal</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout teal"><strong>Evidence:</strong> CBT-I is more effective than sleeping pills in the long term and has no side effects. ~70–80% of people with chronic insomnia show significant improvement (Morin et al., 2006).</div>`
      },
      {
        heading: "☀️ Bright Light Therapy",
        content: `<div class="ls-defbox"><div class="ls-def-term">Bright Light Therapy</div><div class="ls-def-body">A treatment that involves exposure to artificial bright light (typically 2,500–10,000 lux) at specific times of day to reset the circadian rhythm and shift the sleep-wake cycle.</div></div>
        <h5>How it works:</h5>
        <ul>
          <li>Bright light → retina → SCN → suppresses melatonin → promotes wakefulness and advances/delays circadian phase</li>
          <li><strong>Morning light</strong> (on waking) → advances the sleep phase (makes you sleepy earlier) — used for <em>delayed sleep phase disorder</em> (adolescents)</li>
          <li><strong>Evening light</strong> → delays the sleep phase — used for <em>advanced sleep phase disorder</em> (common in older adults)</li>
        </ul>
        <h5>Uses:</h5>
        <ul>
          <li><strong>Adolescent delayed sleep phase</strong> — morning bright light therapy helps shift sleep onset earlier</li>
          <li><strong>Seasonal Affective Disorder (SAD)</strong> — daily morning light therapy reduces depressive symptoms in winter</li>
          <li><strong>Jet lag</strong> — timed light exposure resets the body clock after rapid time zone changes</li>
          <li><strong>Shift workers</strong> — timed light/dark exposure helps align circadian rhythm with unusual work schedules</li>
        </ul>
        <div class="ls-callout navy"><strong>SHE link:</strong> Bright light therapy is a non-pharmacological intervention — it is safe, has minimal side effects, and is particularly relevant for adolescents where medication is often avoided. Understanding the SCN mechanism (from Lesson 1-3-2) explains <em>why</em> this treatment works.</div>`
      },
      {
        heading: "🔬 Practical Activities — Topic 3",
        content: `<div class="ls-callout gold">📋 <strong>Correlational Practical:</strong> Students collect data on sleep duration and a measure of daytime functioning (e.g. reaction time, mood rating, or academic performance). Analyse using a scatter plot and Pearson's r. Write up as a short report linking findings to sleep deprivation research.</div>
        <div class="ls-callout teal">📋 <strong>Divided Attention Practical (Craik et al., 1996):</strong> Students complete a word recall task under single-task vs dual-task conditions to investigate how divided attention affects depth of processing and memory encoding. Compare recall scores and discuss implications for studying while multitasking.</div>
        <h5>Key vocab summary — Topic 3:</h5>
        <div class="ls-vocab-grid">
          <div class="ls-vocab-card"><div class="ls-vocab-term">Consciousness</div><div class="ls-vocab-def">Awareness of self and environment on a continuum</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Selective attention</div><div class="ls-vocab-def">Focusing on one stimulus while filtering others</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Divided attention</div><div class="ls-vocab-def">Allocating attention to two or more tasks simultaneously</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Circadian rhythm</div><div class="ls-vocab-def">~24-hour biological cycle governing sleep-wake timing</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">SCN</div><div class="ls-vocab-def">Suprachiasmatic nucleus — master circadian pacemaker</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Melatonin</div><div class="ls-vocab-def">Hormone released by pineal gland in darkness; promotes sleep</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">EEG</div><div class="ls-vocab-def">Measures brainwave activity; used to identify sleep stages</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">NREM sleep</div><div class="ls-vocab-def">Non-REM sleep; 3 stages; includes slow-wave deep sleep</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">REM sleep</div><div class="ls-vocab-def">Rapid Eye Movement sleep; paradoxical; vivid dreaming</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Sleep cycle</div><div class="ls-vocab-def">~90-minute cycle of NREM + REM; 4–6 cycles per night</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Restoration theory</div><div class="ls-vocab-def">Sleep restores body and brain (Oswald, 1966)</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Evolutionary theory</div><div class="ls-vocab-def">Sleep evolved for safety and energy conservation (Meddis, 1975)</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Narcolepsy</div><div class="ls-vocab-def">Sudden sleep attacks; caused by loss of hypocretin neurons</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Insomnia</div><div class="ls-vocab-def">Persistent difficulty initiating/maintaining sleep</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Sleep apnoea</div><div class="ls-vocab-def">Repeated breathing pauses during sleep; causes arousals</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Sleepwalking</div><div class="ls-vocab-def">NREM Stage 3 parasomnia; no conscious awareness</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">CBT-I</div><div class="ls-vocab-def">Gold-standard psychological treatment for insomnia</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Bright light therapy</div><div class="ls-vocab-def">Timed light exposure to reset circadian rhythm</div></div>
        </div>`
      }
    ]
  }
];
