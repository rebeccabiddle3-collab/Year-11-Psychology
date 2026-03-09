// Unit 1 Topic 1 lesson content data
const U1T1_LESSONS = [
  {
    id: "1-1-1",
    slides: { folder: "Unit 1_Topic 1", start: 1, end: 18 },
    week: "Week 1 · L1",
    num: 1,
    title: "The Mind-Body Problem",
    subtitle: "Galen & Descartes — Materialism vs Dualism",
    duration: "1 lesson",
    syllabus: "Discuss the mind-versus-body problem, with reference to the materialist approach (refer to Claudius Galen) and the dualistic approach (refer to René Descartes).",
    sections: [
      {
        heading: "🧠 Warm-Up Activity",
        type: "activity",
        content: `<p>Your teacher will give you a simple instruction. Follow it — then think about this:</p>
        <div class="ls-callout teal"><strong>Discussion question:</strong> What caused you to choose whether or not to follow the instruction? Was it your brain? Your mind? Are those the same thing?</div>
        <p>This is the central question of the <strong>mind-body problem</strong> — and philosophers have argued about it for thousands of years.</p>`
      },
      {
        heading: "📜 Background: The Brain vs Heart Debate",
        content: `<p>Long before modern psychology, ancient thinkers disagreed about where thoughts and feelings originate.</p>
        <ul>
          <li><strong>Ancient Egyptians</strong> and some early Greek philosophers believed thoughts and emotions originated in the <em>heart</em>.</li>
          <li>Over time, the <strong>brain hypothesis</strong> gained support — particularly through observation and early experimentation.</li>
          <li>This eventually led to the formal <strong>mind-body problem</strong>: <em>What is the mind, and what relationship does it have with the physical brain?</em></li>
        </ul>
        <div class="ls-callout gold">🎬 <strong>Watch:</strong> 'Greek Philosophers and the Brain vs Heart debate' (3 min) — as directed by your teacher</div>`
      },
      {
        heading: "🏛️ Claudius Galen (129–216 AD) — The Materialist Approach",
        content: `<p>Galen was a Roman physician who made the earliest documented connections between the brain and behaviour.</p>
        <h5>What he did:</h5>
        <ul>
          <li>Worked as physician to Roman gladiators, directly observing the effects of head injuries on behaviour, movement, and sensation.</li>
          <li>Conducted early dissections and observations of animal anatomy.</li>
        </ul>
        <h5>Key claims:</h5>
        <ul>
          <li>Nerves and senses connect to the <strong>brain</strong>, not the heart.</li>
          <li>Pressure applied to different brain areas could alter behaviour.</li>
          <li>The brain contains fluid-filled <strong>ventricles</strong> — he believed this fluid spread through nerves and affected health (later disproven, but revolutionary at the time).</li>
        </ul>
        <div class="ls-callout navy"><strong>Significance:</strong> Galen's work went largely unchallenged for approximately <strong>1,500 years</strong>. His approach formed the foundation of what we now call the <strong>materialist (monist) view</strong>.</div>
        <div class="ls-defbox"><div class="ls-def-term">Materialist (Monist) Approach</div><div class="ls-def-body">The view that consciousness and the mind result from complex physical interactions between neurons. There is only one substance — the physical — and the mind is simply what the brain does.</div></div>
        <div class="ls-callout gold">🎬 <strong>Watch:</strong> 'Who was Claudius Galen?' — linked in your slides. Note: Galen's contribution was <em>empirical</em> — based on real observation, not just philosophy.</div>`
      },
      {
        heading: "🔬 René Descartes (1596–1650) — The Dualistic Approach",
        content: `<p>Descartes was a French philosopher and mathematician who challenged the purely physical account of the mind.</p>
        <h5>Key ideas:</h5>
        <ul>
          <li>The mind and body are <strong>two distinct, separate entities</strong> — this is <em>dualism</em>.</li>
          <li>The body is <strong>physical and mechanical</strong>; the mind is <strong>non-physical and conscious</strong>.</li>
          <li>However, he acknowledged they <em>interact</em>: mental processes like memory and imagination result from bodily functions, and the mind can influence the body.</li>
          <li>He speculated the <strong>pineal gland</strong> was the point of connection between mind and body (now known to be incorrect).</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Dualistic Approach</div><div class="ls-def-body">The view that the mind is a separate, non-physical entity from the body. Conscious awareness cannot be reduced to physical processes. The mind and body interact but are fundamentally different in nature.</div></div>`
      },
      {
        heading: "⚖️ Comparing the Two Approaches",
        type: "table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th></th><th>Monism (Galen)</th><th>Dualism (Descartes)</th></tr></thead>
          <tbody>
            <tr><td><strong>What is the mind?</strong></td><td>A product of brain activity — the mind IS the brain</td><td>A non-physical entity, separate from the body</td></tr>
            <tr><td><strong>How many substances exist?</strong></td><td>One (physical only)</td><td>Two (physical body + non-physical mind)</td></tr>
            <tr><td><strong>Can mind and body affect each other?</strong></td><td>No — the mind is just what the brain does</td><td>Yes — each can influence the other</td></tr>
            <tr><td><strong>Key weakness</strong></td><td>Doesn't easily explain subjective experience</td><td>Doesn't explain how a non-physical mind moves a physical body</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "💬 Discussion Activity",
        type: "activity",
        content: `<p>With a partner, take one philosophical position each and argue for it using the philosophers as evidence.</p>
        <ul>
          <li><strong>Person A:</strong> Argue for Galen's materialist position</li>
          <li><strong>Person B:</strong> Argue for Descartes' dualist position</li>
        </ul>
        <p>This targets the <em>'discuss'</em> cognitive verb — you need to present a position <em>and</em> engage with the opposing view.</p>
        <div class="ls-callout gold">🎬 <strong>Watch:</strong> TED-Ed — 'Are you a body with a mind, or a mind with a body?' (6 min) as a closing activity</div>`
      },
      {
        heading: "📚 Key Vocabulary",
        type: "vocab",
        content: `<div class="ls-vocab-grid">
          <div class="ls-vocab-card"><div class="ls-vocab-term">Mind-body problem</div><div class="ls-vocab-def">The philosophical question about the relationship between mental processes (consciousness, thought, emotion) and the physical brain/body.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Monism</div><div class="ls-vocab-def">The view that only one substance (the physical) exists; mind and body are not separate.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Dualism</div><div class="ls-vocab-def">The view that the mind and body are separate entities that can interact.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Consciousness</div><div class="ls-vocab-def">A person's awareness of themselves and the world around them; their subjective experience.</div></div>
        </div>`
      }
    ]
  },
  {
    id: "1-1-2a",
    slides: { folder: "Unit 1_Topic 1", start: 19, end: 27 },
    week: "Week 1 · L2",
    num: 2,
    title: "Phrenology & Flourens' Ablation",
    subtitle: "Early Brain Investigative Techniques I",
    duration: "1 lesson",
    syllabus: "Describe early brain investigative techniques including phrenology (refer to Franz Gall) and experimental neurosurgery (refer to Pierre Flourens).",
    sections: [
      {
        heading: "🗺️ Phrenology — Franz Joseph Gall (1758–1828)",
        content: `<p>Phrenology was one of the first systematic attempts to map brain function to behaviour and personality.</p>
        <h5>What is phrenology?</h5>
        <ul>
          <li>First developed by Franz Joseph Gall in <strong>1796</strong>, originally called <em>cranioscopy</em>.</li>
          <li>Gall proposed the brain had <strong>27 (later 37) distinct 'brain organs'</strong>, each controlling a different mental trait.</li>
          <li>He believed that the more a brain organ was used, the larger it became — pushing outward on the skull.</li>
          <li>Therefore, the <strong>bumps and indentations on the skull</strong> could be felt to reveal personality, intelligence, and emotions.</li>
        </ul>
        <h5>The Psychograph:</h5>
        <ul>
          <li>A device with <strong>32 probes</strong> that measured skull contours.</li>
          <li>Produced a personality 'reading' based on bump locations.</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Phrenology</div><div class="ls-def-body">A now-discredited practice, developed by Franz Gall, claiming that personality and mental traits could be determined by measuring bumps on the skull, based on the idea that each brain region controls a specific function.</div></div>
        <div class="ls-defbox"><div class="ls-def-term">Pseudoscience</div><div class="ls-def-body">A set of beliefs or practices that claims to be scientific but lacks rigorous empirical evidence or falsifiability.</div></div>
        <div class="ls-callout navy">📌 <strong>Important:</strong> Phrenology is now considered a <em>pseudoscience</em> with no empirical support — but it advanced important ideas:
          <ul>
            <li>The <strong>brain</strong> (not the heart) is responsible for personality, emotion, and intelligence.</li>
            <li>Different brain areas may have different functions — an early idea of <strong>localisation of function</strong>.</li>
            <li>The 'use it or lose it' concept foreshadowed modern neuroplasticity.</li>
          </ul>
        </div>
        <div class="ls-callout gold">🎬 <strong>Watch:</strong> BBC reel on phrenology as pseudoscience (4 min). Consider: What makes something truly <em>scientific</em>?</div>`
      },
      {
        heading: "🐇 Experimental Neurosurgery — Pierre Flourens (1794–1867)",
        content: `<p>Flourens was a French physiologist considered the founder of experimental brain science.</p>
        <h5>What he did:</h5>
        <ul>
          <li>Used <strong>ablation</strong> — deliberately damaging or removing specific brain areas — in rabbits and pigeons.</li>
          <li>Carefully observed and recorded the effects on behaviour, movement, and cognition.</li>
          <li>Aimed to determine whether brain regions have localised functions or whether the brain works as a whole.</li>
        </ul>
        <h5>Key findings:</h5>
        <ul>
          <li>Removing the <strong>cerebral hemispheres</strong> → loss of all voluntary perception, motor control, and judgment.</li>
          <li>Removing the <strong>cerebellum</strong> → loss of balance and motor coordination.</li>
          <li>Conclusion: The cerebral cortex governs higher thinking; the cerebellum regulates movement.</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Ablation</div><div class="ls-def-body">The deliberate surgical removal or damage of a specific brain region to study the effect on behaviour and function.</div></div>
        <div class="ls-defbox"><div class="ls-def-term">Localisation of function</div><div class="ls-def-body">The principle that specific areas of the brain are responsible for specific functions (e.g., vision, movement, language).</div></div>
        <div class="ls-callout teal">✅ <strong>Significance:</strong> Flourens provided the <em>first rigorous scientific evidence</em> for brain localisation. His controlled experiments directly challenged phrenology's unscientific skull-reading approach. His findings formed the basis of modern neuroanatomy.</div>`
      },
      {
        heading: "⚡ Comparison: Gall vs Flourens",
        type: "table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Researcher</th><th>Technique</th><th>Subjects</th><th>Scientific?</th><th>Key Contribution</th></tr></thead>
          <tbody>
            <tr><td><strong>Franz Gall</strong></td><td>Phrenology / cranioscopy</td><td>Humans (skull measurements)</td><td>❌ Pseudoscience</td><td>Proposed brain localisation; foreshadowed modern ideas</td></tr>
            <tr><td><strong>Pierre Flourens</strong></td><td>Ablation (brain removal)</td><td>Animals (rabbits, pigeons)</td><td>✅ Experimental</td><td>First controlled evidence of brain localisation; challenged phrenology</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout navy">💡 <strong>Discussion:</strong> Why was Flourens' method more scientific than Gall's? What ethical issues exist with ablation on animals?</div>`
      }
    ]
  },
  {
    id: "1-1-2b",
    slides: { folder: "Unit 1_Topic 1", start: 28, end: 31 },
    week: "Week 1 · L3",
    num: 3,
    title: "Penfield & Electrical Brain Stimulation",
    subtitle: "Early Brain Investigative Techniques II",
    duration: "1 lesson",
    syllabus: "Describe early brain investigative techniques including experimental neurosurgery (refer to Wilder Penfield).",
    sections: [
      {
        heading: "⚡ Wilder Penfield (1891–1976) — The Montreal Procedure",
        content: `<p>Penfield was a Canadian-American neurosurgeon who revolutionised our understanding of the human brain through direct electrical stimulation.</p>
        <h5>What he did:</h5>
        <ul>
          <li>His primary interest was treating <strong>epilepsy</strong> — he developed the <em>Montreal Procedure</em>.</li>
          <li>Surgery was performed with the skull open and the patient <strong>awake under local anaesthetic</strong>.</li>
          <li>He used <strong>Electrical Brain Stimulation (ESB)</strong> — a probe delivering mild electrical impulses to map brain function.</li>
          <li>Because patients were awake, they could <em>report what they experienced</em> (sensations, memories, movements) when different areas were stimulated.</li>
          <li>Neurons causing seizures were then lesioned (destroyed) to reduce epilepsy.</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Electrical Brain Stimulation (ESB)</div><div class="ls-def-body">A technique using a probe to deliver mild electrical impulses to specific brain regions to map their function, developed by Wilder Penfield.</div></div>`
      },
      {
        heading: "🗺️ Key Discoveries",
        content: `<ul>
          <li>The brain is <strong>contralateral</strong>: the right cortex controls the <em>left</em> side of the body and vice versa.</li>
          <li>There is a clear distinction between <strong>motor neurons</strong> (controlling movement) and <strong>sensory neurons</strong> (processing sensation).</li>
          <li>Penfield created the <strong>homunculus</strong> — a distorted body-map drawn on the cortex showing how much brain area is devoted to each body part.</li>
          <li>Areas with fine motor control (hands, face, lips) take up <em>disproportionately large</em> brain areas.</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Contralateral</div><div class="ls-def-body">The physiological principle that one side of the brain controls the opposite side of the body.</div></div>
        <div class="ls-defbox"><div class="ls-def-term">Homunculus</div><div class="ls-def-body">A distorted map of the human body drawn on the cortex showing the relative amount of brain space devoted to each body part.</div></div>`
      },
      {
        heading: "📊 All Three Researchers: Full Comparison",
        type: "table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Researcher</th><th>Technique</th><th>Subjects</th><th>Key Contribution</th></tr></thead>
          <tbody>
            <tr><td><strong>Franz Gall</strong></td><td>Phrenology / cranioscopy</td><td>Humans</td><td>Proposed brain localisation; later discredited as pseudoscience</td></tr>
            <tr><td><strong>Pierre Flourens</strong></td><td>Ablation (brain removal)</td><td>Animals (rabbits, pigeons)</td><td>First experimental evidence of localisation; challenged phrenology</td></tr>
            <tr><td><strong>Wilder Penfield</strong></td><td>Electrical Brain Stimulation (ESB)</td><td>Humans (awake surgery)</td><td>Mapped motor and sensory cortex; discovered contralateral brain control</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout navy">💡 <strong>Ethics question:</strong> What are the ethical considerations of Penfield's awake surgery? What benefits justify this approach?</div>`
      }
    ]
  },
  {
    id: "1-1-3",
    slides: { folder: "Unit 1_Topic 1", start: 32, end: 48 },
    week: "Week 2 · L1",
    num: 4,
    title: "Neuroimaging Techniques",
    subtitle: "EEG, MRI, fMRI and PET",
    duration: "2 lessons",
    syllabus: "Explain how neuroimaging techniques can be used to enhance the understanding of the structure of the brain and its relationship to cognition, emotion and behaviour (PET, MRI, fMRI, EEG).",
    sections: [
      {
        heading: "🔭 Why Neuroimaging?",
        content: `<p>Historically, understanding the brain required waiting for patients to die before post-mortem examination. <strong>Neuroimaging changed this completely.</strong></p>
        <p>There are two broad categories:</p>
        <ul>
          <li><strong>Structural neuroimaging:</strong> Shows the anatomy and physical structure of the brain (CT, MRI).</li>
          <li><strong>Functional neuroimaging:</strong> Shows which areas of the brain are active at a given time — the brain 'at work' (PET, fMRI, EEG).</li>
        </ul>`
      },
      {
        heading: "📡 Electroencephalography (EEG)",
        content: `<ul>
          <li>Developed by <strong>Hans Berger (1873–1941)</strong>. He first used tin foil electrodes on his son's head!</li>
          <li>Detects, amplifies, and records <strong>electrical activity</strong> from the brain in real time via electrodes on the scalp.</li>
          <li>Measures <strong>brain waves</strong> in response to stimuli.</li>
          <li>❌ Cannot show the <em>specific location</em> of brain activity — only that activity is occurring.</li>
          <li>Useful for: detecting head injury abnormalities, studying epilepsy, sleep research (different brain wave patterns during different sleep stages).</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">EEG (Electroencephalography)</div><div class="ls-def-body">A technique that records electrical activity of the brain via electrodes on the scalp, showing brain wave patterns in real time but without precise localisation.</div></div>`
      },
      {
        heading: "🧲 Magnetic Resonance Imaging (MRI)",
        content: `<ul>
          <li>Uses powerful <strong>magnetic fields and radio waves</strong> to produce high-resolution 2D and 3D images of brain structure.</li>
          <li>Can view brain structures from multiple angles — highly versatile.</li>
          <li>Higher resolution than CT — can detect small tumours, lesions, and subtle changes.</li>
          <li>❌ Does NOT show brain function — only structure and anatomy.</li>
          <li>❌ Cannot be used on people with internal metal devices (pacemakers, pins, implants). Expensive, loud, and can cause claustrophobia.</li>
        </ul>
        <div class="ls-callout teal">📖 <strong>Real-world example:</strong> MRI studies on London taxi drivers showed the hippocampus (memory and spatial navigation centre) was physically <em>larger</em> in experienced drivers — demonstrating that brain structure changes with experience.</div>
        <div class="ls-defbox"><div class="ls-def-term">MRI (Magnetic Resonance Imaging)</div><div class="ls-def-body">Uses magnetic fields and radio waves to produce detailed structural images of the brain. Does not show brain activity.</div></div>`
      },
      {
        heading: "🩸 Functional MRI (fMRI)",
        content: `<ul>
          <li>A specialised MRI that measures <strong>brain activity</strong> rather than just structure.</li>
          <li>Tracks <strong>blood oxygen levels</strong> — active regions use more oxygen and therefore have increased blood flow.</li>
          <li>Produces 3D images updated approximately <strong>once per second</strong>, showing active regions during specific tasks.</li>
          <li>Higher resolution than PET scans.</li>
          <li>Applications: Shows which brain areas are active during thinking, experiencing emotion, making decisions, or watching TV. Used to study depression, PTSD, and autism.</li>
          <li>❌ Same limitations as MRI: no metal implants; expensive; claustrophobia.</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">fMRI (Functional MRI)</div><div class="ls-def-body">Measures real-time brain activity by tracking blood oxygen levels. Produces 3D images of brain function with high spatial resolution.</div></div>`
      },
      {
        heading: "☢️ Positron Emission Tomography (PET)",
        content: `<ul>
          <li>A <strong>radioactive tracer</strong> (attached to glucose) is injected or inhaled by the patient.</li>
          <li>Active brain regions consume more glucose, so they absorb more tracer.</li>
          <li><strong>Gamma rays</strong> are emitted from the most active regions and detected externally to produce a coloured image.</li>
          <li>Can track changes in brain activity over time (e.g., before and after disease progression).</li>
          <li>Particularly useful for studying <strong>Alzheimer's, Parkinson's, and schizophrenia</strong>.</li>
          <li>❌ Lower resolution than fMRI. Involves radiation exposure. Very expensive.</li>
        </ul>
        <div class="ls-callout gold">🎬 <strong>Watch:</strong> Alzheimer's PET scan comparison (before/after) — linked in your slides. What does the reduction in active areas tell us about how Alzheimer's affects cognition?</div>
        <div class="ls-defbox"><div class="ls-def-term">PET Scan (Positron Emission Tomography)</div><div class="ls-def-body">Uses a radioactive glucose tracer to track areas of highest brain activity. Produces colour images of brain function but with lower resolution than fMRI.</div></div>`
      },
      {
        heading: "📊 Neuroimaging Comparison Table",
        type: "table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Technique</th><th>What it measures</th><th>Resolution</th><th>Shows function?</th><th>Key use</th></tr></thead>
          <tbody>
            <tr><td><strong>EEG</strong></td><td>Electrical brain waves (scalp)</td><td>Low — no spatial detail</td><td>✅ Real-time</td><td>Sleep, consciousness, epilepsy</td></tr>
            <tr><td><strong>MRI</strong></td><td>Brain structure (anatomy)</td><td>High — clear 3D structure</td><td>❌</td><td>Detecting tumours, structural damage</td></tr>
            <tr><td><strong>fMRI</strong></td><td>Blood oxygen (active regions)</td><td>High — 3D, updated per second</td><td>✅ Real-time</td><td>Mapping cognition, emotion, behaviour</td></tr>
            <tr><td><strong>PET</strong></td><td>Radioactive glucose uptake</td><td>Moderate — coloured activity map</td><td>✅</td><td>Disease progression (Alzheimer's, Parkinson's)</td></tr>
          </tbody>
        </table></div>`
      }
    ]
  },
  {
    id: "1-1-4",
    slides: { folder: "Unit 1_Topic 1", start: 49, end: 68 },
    week: "Week 2 · L3",
    num: 6,
    title: "The Human Nervous System",
    subtitle: "CNS, PNS, Somatic & Autonomic Divisions",
    duration: "1 lesson",
    syllabus: "Describe the basic structure and function of the human nervous system, including the central (i.e. brain and spinal cord) and peripheral (i.e. somatic and autonomic) nervous systems.",
    sections: [
      {
        heading: "🌐 Overview",
        content: `<div class="ls-defbox"><div class="ls-def-term">Nervous System</div><div class="ls-def-body">A physiological communication system between the body's internal cells/organs and the external world, using electrical and chemical signals.</div></div>
        <p>Two main divisions:</p>
        <ul>
          <li><strong>Central Nervous System (CNS)</strong> — brain and spinal cord</li>
          <li><strong>Peripheral Nervous System (PNS)</strong> — all nerves outside the CNS</li>
        </ul>
        <div class="ls-callout teal">📝 <strong>Activity:</strong> Draw a hierarchy diagram of the nervous system as you work through this lesson. Start with CNS/PNS at the top and fill in the branches below.</div>`
      },
      {
        heading: "🧠 Central Nervous System (CNS)",
        content: `<h5>The Brain</h5>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Region</th><th>Function</th></tr></thead>
          <tbody>
            <tr><td><strong>Cerebrum</strong></td><td>Largest part (80% of brain). Controls conscious thought, voluntary movement, and receives all sensory messages. Divided into left and right hemispheres.</td></tr>
            <tr><td><strong>Left hemisphere</strong></td><td>Language, logic, mathematics, analytical thinking</td></tr>
            <tr><td><strong>Right hemisphere</strong></td><td>Spatial awareness, creativity, face recognition, music</td></tr>
            <tr><td><strong>Cerebellum</strong></td><td>Located under cerebrum, behind brainstem. Responsible for coordination and balance.</td></tr>
            <tr><td><strong>Brainstem (Medulla)</strong></td><td>Connects brain to spinal cord. Controls vital automatic functions: heart rate, breathing, sleep, arousal. Coordinates reflexes (coughing, swallowing, vomiting).</td></tr>
          </tbody>
        </table></div>
        <h5 style="margin-top:1rem">The Spinal Cord</h5>
        <ul>
          <li>A continuation of the brainstem running down the vertebral column.</li>
          <li>The main <strong>highway</strong> for signals between brain and body.</li>
          <li>Manages <strong>reflex arcs</strong> — allowing rapid automatic responses without brain involvement.</li>
        </ul>`
      },
      {
        heading: "🔀 Peripheral Nervous System (PNS)",
        content: `<p>The PNS connects the CNS to the rest of the body. It has two main divisions:</p>
        <h5>1. Somatic Nervous System</h5>
        <ul>
          <li>Controls <strong>voluntary movement</strong> and processes sensory information from the environment.</li>
          <li>Contains sensory receptors (nerve endings) that detect: temperature, light, touch, smell, and sound.</li>
          <li>Coordinates body movement in response to sensory input.</li>
        </ul>
        <h5 style="margin-top:.8rem">2. Autonomic Nervous System (ANS)</h5>
        <p>Controls <strong>involuntary</strong> body functions — processes managed automatically without conscious thought. Two opposing systems:</p>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th></th><th>Sympathetic NS</th><th>Parasympathetic NS</th></tr></thead>
          <tbody>
            <tr><td><strong>Activation</strong></td><td>Emergency / stress / physical activity</td><td>Rest, recovery, and digestion</td></tr>
            <tr><td><strong>Heart rate</strong></td><td>Increases</td><td>Decreases / normalises</td></tr>
            <tr><td><strong>Digestion</strong></td><td>Slows or stops</td><td>Increases (stimulates salivary glands)</td></tr>
            <tr><td><strong>Breathing</strong></td><td>Opens bronchioles wider</td><td>Narrows bronchioles</td></tr>
            <tr><td><strong>Blood flow</strong></td><td>Diverted to skeletal muscles</td><td>Directed to digestive organs</td></tr>
            <tr><td><strong>Purpose</strong></td><td>'Fight or flight'</td><td>'Rest and digest'</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout teal">💡 <strong>Scenario:</strong> You're walking through a dark car park and someone runs towards you. Map the next 3 seconds to the sympathetic NS. Then: you get home safe. Map recovery to the parasympathetic NS.</div>`
      }
    ]
  },
  {
    id: "1-1-5-6",
    slides: { folder: "Unit 1_Topic 1", start: 69, end: 82 },
    week: "Week 3 · L1–L2",
    num: 7,
    title: "Neuron Structure & Types",
    subtitle: "Structure of a Neuron · Sensory, Motor & Interneurons",
    duration: "2 lessons",
    syllabus: "1.1.5: Describe the structure of a neuron. 1.1.6: Contrast sensory neurons, motor neurons and interneurons.",
    sections: [
      {
        heading: "⚡ What is a Neuron?",
        content: `<ul>
          <li>The nervous system is made up of trillions of specialised cells called <strong>neurons</strong>, which carry electrical messages throughout the body.</li>
          <li>Neurons can conduct impulses at speeds of up to <strong>100 metres per second</strong>.</li>
          <li>Some neurons have axons up to <strong>one metre long</strong> (e.g., from spinal cord to foot).</li>
        </ul>`
      },
      {
        heading: "🔬 Neuron Structure",
        type: "table",
        content: `<div class="ls-callout teal">📝 <strong>Activity:</strong> Label a diagram of a neuron as you work through this table.</div>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Structure</th><th>Description</th><th>Function</th></tr></thead>
          <tbody>
            <tr><td><strong>Dendrites</strong></td><td>Branch-like projections from the cell body</td><td>Receive signals from other neurons and deliver them to the cell body</td></tr>
            <tr><td><strong>Cell body (soma)</strong></td><td>Central part containing the nucleus</td><td>Controls metabolism and maintenance; integrates incoming signals</td></tr>
            <tr><td><strong>Axon</strong></td><td>Long extension from the cell body</td><td>Transmits the electrochemical impulse <em>away</em> from the cell body</td></tr>
            <tr><td><strong>Myelin sheath</strong></td><td>Fatty insulating coating wrapped around the axon in segments</td><td>Insulates the axon and greatly speeds up signal transmission</td></tr>
            <tr><td><strong>Axon terminal</strong></td><td>Branched endings at the tip of the axon</td><td>Releases neurotransmitters across the synapse to communicate with the next neuron</td></tr>
            <tr><td><strong>Synapse</strong></td><td>Microscopic gap between two neurons</td><td>Junction where chemical neurotransmitter communication occurs</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "💊 Action Potential & Synaptic Transmission",
        content: `<h5>Action Potential</h5>
        <ul>
          <li>When an electrical impulse travels down the axon, it is called an <strong>action potential</strong>.</li>
          <li>The impulse travels at high speed, aided by the insulating myelin sheath.</li>
          <li>When the action potential reaches the axon terminal, it <em>cannot directly cross</em> the gap to the next neuron.</li>
        </ul>
        <h5 style="margin-top:.8rem">Synaptic Transmission</h5>
        <ul>
          <li>The action potential triggers release of <strong>neurotransmitters</strong> — chemical messengers — from the axon terminal.</li>
          <li>Neurotransmitters drift across the synaptic gap and bind to <strong>receptor sites</strong> on the dendrites of the next neuron.</li>
          <li>This either <em>excites</em> or <em>inhibits</em> the next neuron (depending on the neurotransmitter type).</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Neurotransmitter</div><div class="ls-def-body">A chemical messenger released from the axon terminal of one neuron that crosses the synapse and binds to receptors on the next neuron, transmitting the nerve signal.</div></div>`
      },
      {
        heading: "🔀 Types of Neurons",
        type: "table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Neuron Type</th><th>Direction</th><th>Structure</th><th>Function</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Sensory (Afferent)</strong></td><td>Body/environment → CNS</td><td>Pseudounipolar: one axon splitting into two branches</td><td>Carries sensory information from receptors to the brain/spinal cord</td><td>Pain receptor in finger sends signal after touching a hot stove</td></tr>
            <tr><td><strong>Motor (Efferent)</strong></td><td>CNS → muscles/glands</td><td>Multipolar: one axon, several dendrites</td><td>Carries instructions from CNS to muscles or glands</td><td>Brain sends signal to hand muscles to pull away from the stove</td></tr>
            <tr><td><strong>Interneurons</strong></td><td>CNS ↔ CNS</td><td>Multipolar; most lack myelin sheath</td><td>Connect sensory and motor neurons within CNS; involved in reflex arcs</td><td>Spinal cord interneuron connects pain signal to motor response — rapid reflex</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout gold">🔑 <strong>Memory trick:</strong> <strong>SAME</strong> — <strong>S</strong>ensory = <strong>A</strong>fferent (towards CNS) · <strong>M</strong>otor = <strong>E</strong>fferent (away from CNS)</div>
        <div class="ls-callout teal">📝 <strong>Activity:</strong> Trace a reflex arc: stepping on a nail → sensory neuron → interneuron → motor neuron → pulling foot away. This illustrates all three types working together.</div>`
      }
    ]
  },
  {
    id: "1-1-7",
    slides: { folder: "Unit 1_Topic 1", start: 83, end: 108 },
    week: "Week 3–4",
    num: 9,
    title: "The Brain: Hindbrain, Midbrain & Forebrain",
    subtitle: "Three Major Brain Regions",
    duration: "2 lessons",
    syllabus: "Explain that the brain can be viewed as discrete areas, including the hindbrain, midbrain and forebrain.",
    sections: [
      {
        heading: "🧠 Three Major Brain Regions",
        content: `<p>The brain is divided into three broad structural and functional regions, from lowest (most primitive) to highest (most complex):</p>
        <div class="ls-callout teal">📝 <strong>Dual-coding activity:</strong> Label a printed brain diagram and surround it with arrows and brief summaries of each region as you work through this lesson.</div>`
      },
      {
        heading: "1️⃣ The Hindbrain — 'The Primitive Brain'",
        content: `<p>Located at the base of the brain, directly adjacent to the spinal cord. Supports the most vital and automatic bodily functions.</p>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Structure</th><th>Location</th><th>Key Functions</th></tr></thead>
          <tbody>
            <tr><td><strong>Medulla</strong></td><td>Base of brainstem; continuation of spinal cord</td><td>Controls breathing, heartbeat, blood pressure, and digestion. <em>Essential for survival.</em></td></tr>
            <tr><td><strong>Pons</strong></td><td>Above medulla, below midbrain</td><td>Receives/relays visual information. Controls eye movements. Involved in sleep regulation.</td></tr>
            <tr><td><strong>Cerebellum</strong></td><td>Behind brainstem (walnut-shaped)</td><td>Receives signals from pons and sensory systems. Coordinates smooth movement, balance, fine motor control.</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "2️⃣ The Midbrain — Relay & Arousal Centre",
        content: `<p>Located between the hindbrain and forebrain — at the top of the brainstem.</p>
        <ul>
          <li>Acts as a <strong>relay and coordination centre</strong>, connecting hindbrain to forebrain.</li>
          <li>Contains the <strong>reticular formation</strong> — a network of neurons responsible for:
            <ul>
              <li>Sleep regulation and wakefulness</li>
              <li>Motor movement coordination</li>
              <li>Arousal and alertness</li>
            </ul>
          </li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Reticular Formation</div><div class="ls-def-body">A network of neurons in the midbrain (and brainstem) responsible for regulating sleep, arousal, attention, and certain motor movements.</div></div>`
      },
      {
        heading: "3️⃣ The Forebrain — Complex Thought & Consciousness",
        content: `<p>The largest and most complex region. Contains the structures most associated with higher cognition and conscious experience.</p>
        <h5>Thalamus</h5>
        <ul>
          <li>Acts as the brain's <strong>'communication centre'</strong> — the main relay station for sensory information.</li>
          <li>Receives input from eyes, ears, skin, and most sensory organs (except smell).</li>
          <li>Sorts, processes, and routes information to appropriate cortex areas.</li>
        </ul>
        <h5 style="margin-top:.8rem">Hypothalamus</h5>
        <ul>
          <li>Plays a vital role in maintaining <strong>homeostasis</strong> — keeping the body's internal environment stable.</li>
          <li>Controls: body temperature, hunger, thirst, circadian rhythms, and emotional states.</li>
          <li>Controls the 'four Fs': <strong>Feeding, Fighting, Fleeing, and Fornication (reproduction)</strong>.</li>
        </ul>
        <h5 style="margin-top:.8rem">The Cerebrum & Cerebral Cortex</h5>
        <ul>
          <li>The largest, outermost part — divided into two hemispheres by the <strong>longitudinal fissure</strong>.</li>
          <li>Connected by the <strong>corpus callosum</strong> — a large band of white matter enabling the two sides to communicate.</li>
          <li>The thin outer layer (~3mm) is the <strong>cerebral cortex</strong> — contains billions of neurons.</li>
          <li>Surface area is increased by <strong>gyri</strong> (raised folds) and <strong>sulci</strong> (grooves/valleys).</li>
        </ul>`
      },
      {
        heading: "📍 The Four Lobes of the Cerebrum",
        type: "table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Lobe</th><th>Location</th><th>Primary Cortex</th><th>Key Functions</th><th>Effect of Damage</th></tr></thead>
          <tbody>
            <tr><td><strong>Frontal</strong></td><td>Front of cerebrum</td><td>Primary Motor Cortex</td><td>Voluntary movement, language production (Broca's area), planning, judgment, personality</td><td>Poor planning, loss of motor control (contralateral), personality changes</td></tr>
            <tr><td><strong>Parietal</strong></td><td>Top-rear of cerebrum</td><td>Primary Somatosensory Cortex</td><td>Processing touch, pressure, pain, temperature; body awareness and spatial orientation</td><td>Inability to process sensation; numbness (contralateral)</td></tr>
            <tr><td><strong>Temporal</strong></td><td>Sides of cerebrum (near ears)</td><td>Primary Auditory Cortex</td><td>Auditory processing; understanding speech, music, sound location; long-term memory (hippocampus)</td><td>Forms of deafness; language comprehension problems</td></tr>
            <tr><td><strong>Occipital</strong></td><td>Back of cerebrum</td><td>Primary Visual Cortex</td><td>Processing visual stimuli: colour, size, depth, object/face recognition</td><td>Visual impairment; difficulty recognising colours, shapes, faces</td></tr>
          </tbody>
        </table></div>
        <div class="ls-callout navy">💡 <strong>Big picture question:</strong> What would life be like if only the hindbrain was functional? What additional abilities does the forebrain give us?</div>`
      }
    ]
  },
  {
    id: "1-1-8",
    slides: { folder: "Unit 1_Topic 1", start: 109, end: 120 },
    week: "Week 4–5",
    num: 10,
    title: "Interacting Brain Regions",
    subtitle: "Broca's Area · Wernicke's Area · Geschwind's Territory · Limbic System · Prefrontal Cortex",
    duration: "2 lessons",
    syllabus: "Describe the interacting roles of specific brain regions, including Broca's area, Wernicke's area and Geschwind's territory.",
    sections: [
      {
        heading: "🔗 Association Areas",
        content: `<p>Beyond primary cortex areas (which process raw sensory/motor information), the brain has <strong>association areas</strong> responsible for higher-order thinking, interpretation, and complex behaviour.</p>
        <ul>
          <li><strong>Prefrontal cortex</strong> — planning, personality, social behaviour, complex decision-making</li>
          <li><strong>Limbic system</strong> — emotional and behavioural responses</li>
          <li><strong>Broca's area</strong> — speech production</li>
          <li><strong>Wernicke's area</strong> — language comprehension</li>
          <li><strong>Geschwind's territory</strong> — connects language areas</li>
        </ul>`
      },
      {
        heading: "🗣️ Broca's Area — Speech Production",
        content: `<ul>
          <li>Located in the <strong>left frontal lobe</strong> (inferior frontal gyrus).</li>
          <li>Responsible for the coordination and production of speech — the <em>motor planning</em> of speaking.</li>
          <li>Damage → <strong>Broca's aphasia</strong>:
            <ul>
              <li>The person <em>understands</em> language but speaks in slow, halting, effortful speech.</li>
              <li>Speech is <em>telegraphic</em> — short phrases, missing function words (e.g., "want... coffee... now").</li>
              <li>The person is often frustrated and aware of their difficulty.</li>
            </ul>
          </li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Broca's Area</div><div class="ls-def-body">An association area in the left frontal lobe responsible for the coordination and production of speech. Damage causes Broca's aphasia — difficulty speaking fluently despite intact comprehension.</div></div>
        <div class="ls-callout gold">🎬 <strong>Watch:</strong> Broca's aphasia video — before watching, predict: what will be different about this person's speech?</div>`
      },
      {
        heading: "👂 Wernicke's Area — Language Comprehension",
        content: `<ul>
          <li>Located in the <strong>left temporal/parietal lobe</strong> (posterior superior temporal gyrus).</li>
          <li>Responsible for language reception and interpretation — <em>understanding</em> spoken and written language.</li>
          <li>Also involved in forming grammatically correct, meaningful speech.</li>
          <li>Damage → <strong>Wernicke's aphasia</strong>:
            <ul>
              <li>The person speaks <em>fluently</em> and at normal speed, but speech is largely <em>meaningless</em>.</li>
              <li>May use made-up words (neologisms) or incorrect word substitutions.</li>
              <li>Comprehension is severely impaired — they cannot understand others.</li>
              <li>Unlike Broca's patients, they are often <em>unaware</em> there is a problem.</li>
            </ul>
          </li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Wernicke's Area</div><div class="ls-def-body">An association area in the left temporal/parietal lobe responsible for language comprehension and forming meaningful speech. Damage causes Wernicke's aphasia — fluent but nonsensical speech with poor comprehension.</div></div>
        <div class="ls-callout gold">🎬 <strong>Watch:</strong> Wernicke's aphasia video — compare to Broca's: What is the same? What is different?</div>`
      },
      {
        heading: "🔌 Geschwind's Territory — Connecting the Language Areas",
        content: `<ul>
          <li>Found in the <strong>parietal lobe</strong>.</li>
          <li>Connects Broca's and Wernicke's areas via a bundle of nerve fibres called the <strong>arcuate fasciculus</strong>.</li>
          <li>Acts as an <strong>integration zone</strong> — essential for coordinated, meaningful language processing.</li>
          <li>Damage → <strong>conduction aphasia</strong>: the person can understand language and produce fluent speech, but <em>cannot repeat</em> words or sentences accurately.</li>
        </ul>
        <div class="ls-defbox"><div class="ls-def-term">Geschwind's Territory</div><div class="ls-def-body">A region in the parietal lobe that connects Broca's area and Wernicke's area, enabling integrated language comprehension and production.</div></div>`
      },
      {
        heading: "📊 Language Areas Comparison",
        type: "table",
        content: `<div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Region</th><th>Location</th><th>Role</th><th>Damage Effect</th></tr></thead>
          <tbody>
            <tr><td><strong>Broca's area</strong></td><td>Left frontal lobe</td><td>Speech production and coordination</td><td>Broca's aphasia: halting, effortful speech; comprehension largely intact</td></tr>
            <tr><td><strong>Wernicke's area</strong></td><td>Left temporal/parietal lobe</td><td>Language comprehension; forming grammatically correct speech</td><td>Wernicke's aphasia: fluent but meaningless speech; poor comprehension</td></tr>
            <tr><td><strong>Geschwind's territory</strong></td><td>Parietal lobe</td><td>Connects Broca's and Wernicke's via arcuate fasciculus</td><td>Conduction aphasia: cannot repeat words despite intact comprehension and production</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "❤️ The Limbic System",
        content: `<p>A set of interconnected structures sitting above the brainstem but below the cerebral cortex, responsible for emotional and behavioural responses.</p>
        <div class="ls-table-wrap"><table class="ls-table">
          <thead><tr><th>Structure</th><th>Function</th></tr></thead>
          <tbody>
            <tr><td><strong>Hippocampus</strong></td><td>Primary memory centre — transfers short-term to long-term memory. Spatial navigation. Associates memories with sensory stimuli.</td></tr>
            <tr><td><strong>Amygdala</strong></td><td>Central hub for emotional processing: fear, pleasure, anxiety, anger. Responsible for emotional memory — emotionally charged events are remembered more vividly. Triggers fight or flight.</td></tr>
            <tr><td><strong>Thalamus</strong></td><td>Relay station for sensory information (also covered in 1.1.7)</td></tr>
            <tr><td><strong>Hypothalamus</strong></td><td>Regulates homeostasis and survival functions (also covered in 1.1.7)</td></tr>
            <tr><td><strong>Basal Ganglia</strong></td><td>Reward processing, habit formation, and movement learning</td></tr>
          </tbody>
        </table></div>`
      },
      {
        heading: "🧩 Prefrontal Cortex",
        content: `<ul>
          <li>The most <strong>anterior (front) part</strong> of the frontal lobe, directly behind the forehead.</li>
          <li>Responsible for <strong>executive functions</strong>: planning, problem-solving, complex cognitive behaviour, personality expression, and social behaviour.</li>
          <li>One of the <strong>last brain regions to fully develop</strong> — not fully mature until the <em>mid-20s</em>.</li>
          <li>This helps explain adolescent risk-taking behaviour and impulsivity.</li>
        </ul>
        <div class="ls-callout gold">🎬 <strong>Phineas Gage case study:</strong> Gage suffered severe prefrontal damage and his personality changed dramatically — becoming impulsive, unreliable and socially inappropriate — while his memory and intelligence remained largely intact. What does this tell us about the prefrontal cortex? What are the limitations of single case studies as evidence?</div>`
      },
      {
        heading: "📚 Topic 1 Key Vocabulary Summary",
        type: "vocab",
        content: `<div class="ls-vocab-grid">
          <div class="ls-vocab-card"><div class="ls-vocab-term">Monism</div><div class="ls-vocab-def">Mind and body are one — consciousness results from physical brain activity.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Dualism</div><div class="ls-vocab-def">Mind and body are separate, interacting entities.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Phrenology</div><div class="ls-vocab-def">Reading personality from skull bumps; pioneered by Franz Gall. Now discredited.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Ablation</div><div class="ls-vocab-def">Removal/damage of brain tissue to study resulting changes in behaviour (Flourens).</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Contralateral</div><div class="ls-vocab-def">Right brain controls left body, and vice versa.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Neuron</div><div class="ls-vocab-def">Specialised nerve cell that transmits electrical and chemical signals.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Action potential</div><div class="ls-vocab-def">An electrical impulse travelling along the axon.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Synapse</div><div class="ls-vocab-def">The microscopic gap between two neurons, bridged by neurotransmitters.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Localisation</div><div class="ls-vocab-def">Different brain regions perform specific functions.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">CNS</div><div class="ls-vocab-def">Central Nervous System — brain and spinal cord.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">PNS</div><div class="ls-vocab-def">Peripheral Nervous System — all nerves outside the CNS.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Autonomic NS</div><div class="ls-vocab-def">PNS division controlling involuntary functions (sympathetic and parasympathetic).</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Broca's area</div><div class="ls-vocab-def">Left frontal lobe — speech production. Damage = halting speech.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Wernicke's area</div><div class="ls-vocab-def">Left temporal/parietal lobe — language comprehension. Damage = fluent but meaningless speech.</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Hippocampus</div><div class="ls-vocab-def">Memory consolidation and spatial navigation (limbic system).</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Amygdala</div><div class="ls-vocab-def">Emotional processing and emotional memory (limbic system).</div></div>
          <div class="ls-vocab-card"><div class="ls-vocab-term">Prefrontal cortex</div><div class="ls-vocab-def">Executive functions: planning, personality, social behaviour (frontal lobe).</div></div>
        </div>`
      }
    ]
  }
];
