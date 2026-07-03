'use client'

import { useState } from 'react'
import BetaModal from '@/components/BetaModal'
import styles from '@/components/Home.module.css'

function AzureLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="az1" x1="0.677" y1="0.166" x2="0.427" y2="0.987" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient id="az2" x1="0.372" y1="0.133" x2="0.563" y2="0.894" gradientUnits="objectBoundingBox">
          <stop offset="0" stopOpacity=".3" />
          <stop offset=".071" stopOpacity=".2" />
          <stop offset=".321" stopOpacity=".1" />
          <stop offset=".623" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="az3" x1="0.073" y1="0.166" x2="0.921" y2="0.987" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path d="M33.338 6.544h26.038L33.643 89.954a4.148 4.148 0 01-3.93 2.817H8.5a4.144 4.144 0 01-3.924-5.47L29.408 9.36a4.148 4.148 0 013.93-2.816z" fill="url(#az1)" />
      <path d="M71.175 60.677H29.553a1.911 1.911 0 00-1.3 3.31l26.947 25.16a4.171 4.171 0 002.85 1.124h23.773z" fill="url(#az2)" />
      <path d="M33.338 6.544a4.118 4.118 0 00-3.939 2.854L4.614 87.24a4.141 4.141 0 003.887 5.531h20.575a4.443 4.443 0 003.4-2.855l4.966-14.638 17.751 16.579a4.246 4.246 0 002.666.944H81.24L71.024 60.677l-29.781.007L56.477 6.544z" fill="url(#az3)" />
      <path d="M66.592 9.36a4.144 4.144 0 00-3.926-2.816H33.648a4.146 4.146 0 013.926 2.816l24.832 77.941a4.145 4.145 0 01-3.926 5.47h29.018a4.145 4.145 0 003.926-5.47z" fill="#0078d4" />
    </svg>
  )
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.pageShell}>
      <header className={styles.siteHeader}>
        <div className={styles.brand}>
          <span className={styles.brandName}>.cucumbu</span>
        </div>
        <nav className={styles.siteNav} aria-label="Primary navigation">
          <a href="#features">features</a>
          <a href="#how-it-works">how it works</a>
          <a href="#integrations">integrations</a>
          <button className={styles.navCta} onClick={() => setIsModalOpen(true)}>
            launching this october
          </button>
        </nav>
      </header>

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <h1>autonomous AI for your workspace</h1>
            <p className={styles.heroText}>
              Turn every tool into a trusted teammate. Cucumbu is launching
              this October, bringing an agent that can join a meeting, draft
              the email, or sync Slack threads while you stay focused and
              brainstrong.
            </p>
            <div className={styles.heroActions}>
              <button
                className={`${styles.button} ${styles.buttonPrimary}`}
                onClick={() => setIsModalOpen(true)}
              >
                Launching this October
              </button>
              <a
                className={`${styles.button} ${styles.buttonSecondary}`}
                href="mailto:team@cucumbu.com"
              >
                Book a demo
              </a>
            </div>
            <div className={styles.heroSubtext}>
              <span className={styles.heroSubtextItem}>
                <AzureLogo size={16} />
                <span>Backed by Microsoft Azure</span>
              </span>
              <span className={styles.heroSubtextDot} aria-hidden="true">
                &middot;
              </span>
              <span>No credit card</span>
              <span className={styles.heroSubtextDot} aria-hidden="true">
                &middot;
              </span>
              <span>500+ Hours Saved</span>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <video className={styles.heroVideo} autoPlay muted loop playsInline>
              <source
                src="https://user-cdn.hackclub-assets.com/019dbfed-e030-7f2a-ab7e-f9495e605c43/Join%20Waitlist.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={styles.scrollingRibbon}>
            <div className={styles.ribbonTrack}>
              <div className={styles.ribbonContent}>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" alt="Gmail logo" /><span>Gmail</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googledrive.svg" alt="Google Drive logo" /><span>Google Drive</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftteams.svg" alt="Microsoft Teams logo" /><span>Microsoft Teams</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg" alt="Slack logo" /><span>Slack</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoom.svg" alt="Zoom logo" /><span>Zoom</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecalendar.svg" alt="Google Calendar logo" /><span>Google Calendar</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg" alt="Outlook logo" /><span>Outlook</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg" alt="Notion logo" /><span>Notion</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg" alt="Salesforce logo" /><span>Salesforce</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/asana.svg" alt="Asana logo" /><span>Asana</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dropbox.svg" alt="Dropbox logo" /><span>Dropbox</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg" alt="Figma logo" /><span>Figma</span></span>
              </div>
              <div className={styles.ribbonContent} aria-hidden="true">
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" alt="" /><span>Gmail</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googledrive.svg" alt="" /><span>Google Drive</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftteams.svg" alt="" /><span>Microsoft Teams</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/slack.svg" alt="" /><span>Slack</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zoom.svg" alt="" /><span>Zoom</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecalendar.svg" alt="" /><span>Google Calendar</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftoutlook.svg" alt="" /><span>Outlook</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg" alt="" /><span>Notion</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg" alt="" /><span>Salesforce</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/asana.svg" alt="" /><span>Asana</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/dropbox.svg" alt="" /><span>Dropbox</span></span>
                <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg" alt="" /><span>Figma</span></span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className={`${styles.section} ${styles.sectionFeatures}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>built for modern teams</p>
            <h2>Everything your digital assistant should already do.</h2>
            <p>
              One agent, all your tools. cucumbu connects with your workflow,
              automates the busywork, and keeps your memory safe so every next
              task is smarter than the last.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <span className={styles.featureTag}>Meetings</span>
              <h3>Join calls like a teammate</h3>
              <p>
                Launch cucumbu into Google Meet, Teams, or Zoom and get live
                context, questions, and follow ups without missing the flow.
              </p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureTag}>Tasks</span>
              <h3>Ask, assign, and automate</h3>
              <p>
                Write emails, summarize notes, create tickets, and assign work
                with a single request.
              </p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureTag}>Memory</span>
              <h3>Learn from you forever</h3>
              <p>
                cucumbu stores what matters, adapts to your style, and keeps the
                workflow consistent across every tool.
              </p>
            </article>
            <article className={styles.featureCard}>
              <span className={styles.featureTag}>Integrations</span>
              <h3>All your apps, one agent</h3>
              <p>
                Slack, Gmail, Teams, Calendar, Notion, and more, connected in a
                single assistant that knows your workspace.
              </p>
            </article>
          </div>
        </section>

        <section id="how-it-works" className={`${styles.section} ${styles.sectionProcess}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>how it works</p>
            <h2>From instruction to execution in three steps.</h2>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>1</span>
              <h3>Tell it what to do</h3>
              <p>
                Ask your agent to join a meeting, write an email, or track a
                project in plain language.
              </p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>2</span>
              <h3>It acts on your tools</h3>
              <p>
                cucumbu integrates with your workspace, executes tasks, and keeps
                the whole team in sync.
              </p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNumber}>3</span>
              <h3>It remembers everything</h3>
              <p>
                Your agent learns your voice, priorities, and processes so every
                interaction gets easier.
              </p>
            </div>
          </div>
        </section>

        <section id="integrations" className={`${styles.section} ${styles.sectionIntegrations}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>integrations</p>
            <h2>Native support for the tools your team already uses.</h2>
            <p>
              When Cucumbu launches this October, support will start with a
              focused set of core apps, so not every integration shown or
              requested will be available on day one.
            </p>
          </div>

          <div className={styles.integrationGrid}>
            <div className={styles.integrationPill}>Google Meet</div>
            <div className={styles.integrationPill}>Slack</div>
            <div className={styles.integrationPill}>Microsoft Teams</div>
            <div className={styles.integrationPill}>Gmail</div>
            <div className={styles.integrationPill}>Google Calendar</div>
            <div className={styles.integrationPill}>Notion</div>
            <div className={styles.integrationPill}>Outlook</div>
            <div className={styles.integrationPill}>Asana</div>
          </div>
        </section>

        <section id="get-started" className={`${styles.section} ${styles.sectionCta}`}>
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.sectionEyebrow}>ready to build smarter?</p>
              <h2>Bring cucumbu into your workspace today.</h2>
              <p>
                Early access for teams who want an assistant that actually learns
                from them, not just follows rules.
              </p>
            </div>
            <button
              className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonLarge}`}
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              Launching this October
            </button>
          </div>
        </section>
      </main>

      <footer className={styles.siteFooter}>
        <p>&copy; 2026 cucumbu. Built to make workspace AI feel like a real partner.</p>
        <a href="mailto:team@cucumbu.com">team@cucumbu.com</a>
      </footer>

      <BetaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
