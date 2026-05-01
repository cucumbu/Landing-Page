'use client'

import { useState } from 'react'
import BetaModal from '@/components/BetaModal'
import styles from '@/components/Home.module.css'

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
          <button 
            className={styles.navCta}
            onClick={() => setIsModalOpen(true)}
          >
            join beta
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <h1>autonomous AI for your workspace</h1>
            <p className={styles.heroText}>
              Turn every tool into a trusted teammate. Ask your agent to join a
              meeting, draft the email, or sync Slack threads while you stay
              focused and brainstrong. Meet Cucumbu, your memory driven agent
              that joins meetings, writes follow ups, and learns from you over
              time.
            </p>
            <div className={styles.heroActions}>
              <button 
                className={`${styles.button} ${styles.buttonPrimary}`}
                onClick={() => setIsModalOpen(true)}
              >
                Start with beta
              </button>
              <a className={`${styles.button} ${styles.buttonSecondary}`} href="#features">See features</a>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <video className={styles.heroVideo} autoPlay muted loop playsInline>
              <source src="https://user-cdn.hackclub-assets.com/019dbfed-e030-7f2a-ab7e-f9495e605c43/Join%20Waitlist.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.scrollingRibbon}>
            <div className={styles.ribbonContent}>
              <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" alt="Gmail logo" /><span>Gmail</span></span>
              <span className={styles.ribbonItem}><img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google-drive.svg" alt="Google Drive logo" /><span>Google Drive</span></span>
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
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`${styles.section} ${styles.sectionFeatures}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>built for modern teams</p>
            <h2>Everything your digital assistant should already do.</h2>
            <p>
              One agent, all your tools. Cucumbu connects with your workflow,
              automates the busywork, and keeps your memory safe so every next
              task is smarter than the last.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <span className={styles.featureTag}>Meetings</span>
              <h3>Join calls like a teammate</h3>
              <p>
                Launch Cucumbu into Google Meet, Teams, or Zoom and get live
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
                Cucumbu stores what matters, adapts to your style, and keeps the
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

        {/* How It Works Section */}
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
                Cucumbu integrates with your workspace, executes tasks, and keeps
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

        {/* Integrations Section */}
        <section id="integrations" className={`${styles.section} ${styles.sectionIntegrations}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionEyebrow}>integrations</p>
            <h2>Native support for the tools your team already uses.</h2>
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

        {/* CTA Section */}
        <section id="get-started" className={`${styles.section} ${styles.sectionCta}`}>
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.sectionEyebrow}>ready to build smarter?</p>
              <h2>Bring Cucumbu into your workspace today.</h2>
              <p>
                Early access for teams who want an assistant that actually learns
                from them, not just follows rules.
              </p>
            </div>
            <a className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonLarge}`} href="mailto:hello@cucumbu.ai">Join early access</a>
          </div>
        </section>
      </main>

      <footer className={styles.siteFooter}>
        <p>© 2026 Cucumbu. Built to make workspace AI feel like a real partner.</p>
      </footer>

      {/* Beta Modal */}
      <BetaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
