import MarioGame from '@/components/MarioGame';

function KeyboardInstructions() {
  const keyStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid #333',
    borderRadius: '6px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    boxShadow: '0 2px 0 #666',
  };

  const spaceKeyStyle: React.CSSProperties = {
    ...keyStyle,
    width: '100px',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#fff',
    marginTop: '4px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
  };

  const groupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '30px',
        alignItems: 'flex-end',
        zIndex: 1000,
        fontFamily: '"Press Start 2P", monospace, Arial',
      }}
    >
      <div style={groupStyle}>
        <div style={{ display: 'flex', gap: '4px' }}>
          <div style={keyStyle}>←</div>
          <div style={keyStyle}>→</div>
        </div>
        <span style={labelStyle}>MOVE</span>
      </div>
      <div style={groupStyle}>
        <div style={spaceKeyStyle}>SPACE</div>
        <span style={labelStyle}>JUMP</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      <MarioGame />
      <KeyboardInstructions />
    </div>
  );
}
