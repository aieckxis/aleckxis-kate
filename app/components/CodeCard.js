export default function CodeCard() {
    return (
        <div className="code-card">
            <div className="code-card-header">
                <div className="code-card-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                </div>
                <span className="code-card-filename">profile.js</span>
            </div>
            <pre className="code-card-body">
                <code>
                    <span className="tok-kw">const</span>{' '}
                    <span className="tok-var">engineer</span>{' '}
                    <span className="tok-punct">=</span>{' '}
                    <span className="tok-punct">{'{'}</span>
                    {'\n'}
                    {'  '}
                    <span className="tok-prop">name</span>
                    <span className="tok-punct">:</span>{' '}
                    <span className="tok-str">&quot;Aleckxis Kate&quot;</span>
                    <span className="tok-punct">,</span>
                    {'\n'}
                    {'  '}
                    <span className="tok-prop">role</span>
                    <span className="tok-punct">:</span>{' '}
                    <span className="tok-str">&quot;Front-End Engineer&quot;</span>
                    <span className="tok-punct">,</span>
                    {'\n'}
                    {'  '}
                    <span className="tok-prop">skills</span>
                    <span className="tok-punct">:</span>{' '}
                    <span className="tok-punct">[</span>
                    <span className="tok-str">&quot;Next.js&quot;</span>
                    <span className="tok-punct">,</span>{' '}
                    <span className="tok-str">&quot;React&quot;</span>
                    <span className="tok-punct">,</span>{' '}
                    <span className="tok-str">&quot;TypeScript&quot;</span>
                    <span className="tok-punct">,</span>{' '}
                    <span className="tok-str">&quot;Tailwind CSS&quot;</span>
                    <span className="tok-punct">]</span>
                    <span className="tok-punct">,</span>
                    {'\n'}
                    {'  '}
                    <span className="tok-prop">passion</span>
                    <span className="tok-punct">:</span>{' '}
                    <span className="tok-str">
                        &quot;Transforming logic into intuitive interfaces&quot;
                    </span>
                    {'\n'}
                    <span className="tok-punct">{'}'}</span>
                    <span className="tok-punct">;</span>
                </code>
            </pre>
        </div>
    );
}