-- Create the players table
CREATE TABLE players (
    PlayerID INTEGER PRIMARY KEY,
    Player VARCHAR(100) NOT NULL,
    Team VARCHAR(50),
    Pos VARCHAR(10),
    Age INTEGER,
    G INTEGER,
    GS INTEGER,
    MP DECIMAL(5,1),
    FG DECIMAL(5,1),
    FGA DECIMAL(5,1),
    FG_Percentage DECIMAL(4,3),
    ThreeP DECIMAL(5,1),
    ThreePA DECIMAL(5,1),
    ThreeP_Percentage DECIMAL(4,3),
    TwoP DECIMAL(5,1),
    TwoPA DECIMAL(5,1),
    TwoP_Percentage DECIMAL(4,3),
    FT DECIMAL(5,1),
    FTA DECIMAL(5,1),
    FT_Percentage DECIMAL(4,3),
    ORB DECIMAL(5,1),
    DRB DECIMAL(5,1),
    TRB DECIMAL(5,1),
    AST DECIMAL(5,1),
    STL DECIMAL(5,1),
    BLK DECIMAL(5,1),
    TOV DECIMAL(5,1),
    PF DECIMAL(5,1),
    PTS DECIMAL(5,1),
    Salary DECIMAL(12,2)
);

-- Create the player_comparisons table
CREATE TABLE player_comparisons (
    player_id INTEGER PRIMARY KEY,
    comparisons JSONB,
    FOREIGN KEY (player_id) REFERENCES players(PlayerID)
);

-- Create indexes
CREATE INDEX idx_team ON players(Team);
CREATE INDEX idx_position ON players(Pos);

INSERT INTO player_comparisons (player_id, comparisons)
VALUES (
    1, 
    '[
        {"SimilarPlayerID": 2, "Distance": 0.1},
        ....
        ....
        ....
        
    ]'::jsonb
);